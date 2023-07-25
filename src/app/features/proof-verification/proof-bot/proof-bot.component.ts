import { animate, style, transition, trigger } from "@angular/animations";
import {
  ChangeDetectorRef,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
  ElementRef
} from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ElementDividerComponent } from "../components/element-divider/element-divider.component";
import { SiteScreenComponent } from "../components/site-screen/site-screen.component";
import { BotGlobaldataComponent } from "../components/bot-globaldata/bot-globaldata.component";
import * as POBLJSON from "../ProofJSONs/POBL.json";
import * as POBLMJSON from "../ProofJSONs/POBL-Merge.json";
import * as POGJSON from "../ProofJSONs/POG.json";
import * as POEJSON from "../ProofJSONs/POE_NEW.json";
import * as POELangJSON from "../ProofJSONs/POE_NEW-lang.json";
import * as POGLangJSON from "../ProofJSONs/POG_lang.json";
import * as POBLLangJSON from "../ProofJSONs/POBL_lang.json";
import * as ActionConfigurationsQa from "../ProofJSONs/ActionCofigurationsQa.json";
import * as ActionConfigurationsStaging from "../ProofJSONs/ActionConfigurationsStaging.json";
import * as ActionConfigurationsProduction from "../ProofJSONs/ActionCofigurationsProduction.json";
import { VerificationServiceService } from "src/app/services/verification-service.service";
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr'
import { ApiService } from "src/app/services/api.service";
import { BuildPOCJsonService } from "src/app/services/build-pocjson.service";
import { ErrorModalComponent } from "src/app/shared/components/error-modal/error-modal.component";
import { BsModalService, ModalOptions } from "ngx-bootstrap/modal";
import { DataKeys } from "src/app/shared/models/commonTypes";
import * as d3 from 'd3';
import * as dagreD3 from 'dagre-d3';
import { BotHeaderComponent } from "../components/bot-header/bot-header.component";
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "proof-bot",
  templateUrl: "./proof-bot.component.html",
  styleUrls: ["./proof-bot.component.css"],
  animations: [
    trigger("screenAnimation", [
      transition(":enter", [
        style({ transform: "translateY(400px)", opacity: 0 }),
        animate("400ms", style({ transform: "translateY(0%)", opacity: 1 }))
      ])
    ]),
    trigger("screenAnimationDemo", [
      transition(":enter", [
        style({ transform: "translateY(400px)", opacity: 0 }),
        animate("1200ms", style({ transform: "translateY(0%)", opacity: 1 }))
      ])
    ]),
    trigger("inOutAnimation", [
      transition(":enter", [
        style({ opacity: 0 }),
        animate("100ms ease-out", style({ opacity: 1 }))
      ]),
      transition(":leave", [
        style({ opacity: 1 }),
        animate("100ms ease-in", style({ opacity: 0 }))
      ])
    ])
  ]
})
export class ProofBotComponent implements OnInit {
  StorageTitle: string = "Storage Container";
  ProofContainerTitle: string = "";
  @Input() isMerkleTreeAvaible: Boolean;
  @Input() initialWidth: string = "100%";
  @Input() initialHeight: string = "100%";
  @Input() minWidth: string = "100%";
  @Input() minHeight: string = "100%";
  @Input() maxWidth: string = "100%";
  @Input() maxHeight: string = "100%";
  @Input() justifyContent: string = "center";
  @Input() alignItems: string = "center";
  @Input() frameData: any = {};
  currentStep: number = 0;
  lastCompletedStep: number = 0;
  totalSteps: number = 0;
  gsHeightExpand: boolean = false;
  @Input() vsHeightExpand: boolean = false;
  @Input() isEmbedded: boolean = false;
  @Input() isAutoScale: boolean = true;
  isStartDemo: boolean = false;
  isPause: boolean = false;
  isReplay: boolean = false;
  isLoading: boolean = false;
  isPlayCompleted: boolean = false;
  variableStorage: any = {};
  proofJSON: any = {};
  globalData: object[] = [];
  steppers: any[] = [];
  subSteppers: any[] = [];
  demoScreenChildRefs: any = {};
  color = "primary";
  mode = "indeterminate";
  value = 10;
  Svalue: string;
  gsOverflowX: string = "hidden";
  vsOverflowX: string = "hidden";
  ActionDescription: string = "";
  TXNhash: string = "";
  TXNhash2: string = "";
  playbackSpeed: number = 1;
  i: number;
  @Input() proofBotParams: any;
  isDisableGlobalInformationL: boolean = true;
  isDisableGlobalInformationR: boolean = true;
  isBackToStep: boolean = false;
  isToast: boolean = false;
  isToast1: boolean = false;
  @Input() isTheater: boolean = false;
  toastMSG: string;
  toastMSG1: string;
  toastTop: string = "40%";
  toastTop1: string = "0%";
  toastLeft: string = "32%";
  toastLeft1: string = "32%";
  icon: string;
  LoadingProofType: string;
  ActionConfigurations: any;
  SegmentNumber: number;
  availableProofs: any[] = ["poe", "pog", "pobl", "poc"];
  proofType: string;
  lang: string = "en";
  Name: string = "";
  @ViewChild("ProofDemoDirective", { read: ViewContainerRef, static: false })
  proofDemoRef: ViewContainerRef;
  errorOccurred: boolean = false
  nodes: any;
  nodesWithMerkleTree: any;
  POCJSON: any;
  tdpId: string;
  batch: string;
  product: string;
  isCollapsedPocTree = false;
  isCollapsedSegment = false;
  isCollapsedMainValues = false;
  currentProof: string = "";
  currentBatch: string = "";
  currentBatch2: string = "";
  currentProduct: string = "";
  currentProduct2: string = "";
  @Input() isProofStart:Boolean;
  completedProofs: any[]=[];
  startedProofs: any[]=[];
  currentId: string="";
  currentProofType: string="";
  TotalProofCountOfPOC: any;
  SuccessProofs: any[]=[];
  FailedProofs: any[]=[];
  isEncodedData: boolean = false;
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private cdr: ChangeDetectorRef,
    private route: ActivatedRoute,
    private verificationHttpService: VerificationServiceService,
    private router: Router,
    private toastr: ToastrService,
    private apiService: ApiService,
    private pocJsonService: BuildPOCJsonService,
    private modalService: BsModalService,
    public commonServices: CommonService,
    private elRef: ElementRef,
  ) { }

  ngOnInit() {
    this.route.queryParamMap.subscribe(params => {
      if (!params.get("txn") || !params.get("type")) {
        this.openModal("Invalid URL", 404, environment.blockchain.domailUrl + this.router.url)
        return
      } else if (!this.availableProofs.includes(params.get("type"))) {
        this.openModal("Invalid URL", 404, environment.blockchain.domailUrl + this.router.url)
        return
      } else if (params.get("type") == 'pobl' && !params.get("txn2")) {
        this.openModal("Invalid URL", 404, environment.blockchain.domailUrl + this.router.url)
        return
      } else {
      }
      this.proofBotParams = {
        params: {
          txn: params.get("txn"),
          type: params.get("type"),
          txn2: params.get("txn2")
        }
      };

      this.verificationHttpService.loadPage(environment.blockchain.getTransactionData + "?txn=" + this.proofBotParams.params.txn + "&page=1&perPage=10").subscribe(
        async data => {
          try {
            if (!data) {
              this.openModal("Invalid URL", 204)
              return
            } else {
              let dataJson = JSON.parse(data)
              this.product = dataJson[0].Timestamp?this.commonServices.decodeFromBase64(dataJson[0].ProductName) : dataJson[0].ProductName
              this.batch = dataJson[0].Identifier
              this.tdpId = dataJson[0].TdpId
            }
          } catch (error) {
            this.openModal("Invalid URL", 404, error.message)
          }
        },
        error => {
          this.openModal("Check the Internet Connection", error.status, error.message)
        }
      );

    });
    this.proofType = this.proofBotParams.params.type;
    this.LoadingProofType = this.commonServices.getProofName(this.proofType)
    this.TXNhash = this.proofBotParams.params.txn;
  }

  async ngAfterViewInit() {
    this.cdr.detectChanges();
  }

  async startDemoFn() {
    this.isProofStart=true;
    if (!!this.proofType && this.availableProofs.includes(this.proofType))
      if (!!this.proofBotParams.params.type) {
        this.TXNhash = this.proofBotParams.params.txn;
        this.variableStorage["TXNhash"] = this.proofBotParams.params.txn;
        this.isLoading = true;
        // backend call
        await new Promise(resolveTime => setTimeout(resolveTime, 4200));
        // start demo (not -verifing)
        if (this.proofType == "poc") {
          let url = environment.blockchain.getPocTreeDataWithMerkletree + "/" + this.proofBotParams.params.txn
          this.apiService.getData(url).subscribe((data1) => {
            this.nodesWithMerkleTree = data1
            if (this.hasTxnTypeMerge(data1.Nodes)) {
              let url2 = environment.blockchain.getPocTreeData + "/" + this.proofBotParams.params.txn
              this.apiService.getData(url2).subscribe((data2) => {
                this.nodes = data2
                this.initiateProofDemo();
              }, (err) => {
                this.openModal("Invalid URL", err.status, err.message)
              })
            } else {
              this.initiateProofDemo();
            }
          }, (err) => {
            this.openModal("Invalid URL", err.status, err.message)
          })

        } else
          this.initiateProofDemo();
      } else
        return
  }

  async initiateProofDemo() {
    const { protocolJson, langJson } = await this.getProtocolJSON();
    this.proofJSON = protocolJson;
    // handle lang
    if (langJson) this.handleLangJson(langJson);
    this.ActionConfigurations = this.getActionConfigurations();
    // handleMultiStepAction
    this.handleMultiStepActions();
    const { Header } = this.proofJSON;
    this.StorageTitle = Header.StorageTitle;
    this.ProofContainerTitle = Header.ProofContainerTitle;
    this.steppers = this.filterSegmentsAndActions(Header.Segments);
    this.playbackSpeed = Header.PlaybackSpeed;
    this.gsHeightExpand = Header.GSHeightExpand;
    this.gsOverflowX = Header.GSOverflowX;
    if (Object.keys(Header).includes("VSHeightExpand"))
      this.vsHeightExpand = Header.VSHeightExpand;
    this.vsOverflowX = Header.VSOverflowX;
    await this.scrollToFrameById("proofHeaderTitle", 20);
    if(this.proofType=='poc'){
      this.TotalProofCountOfPOC = this.pocJsonService.getTotalOrderedNodesCount();
      console.log("proofcount----",this.TotalProofCountOfPOC);
    }
    this.isStartDemo = true;
    this.playProofDemo(0);
  }

  async getProtocolJSON() {
    var protocolJson: any;
    var langJson: any;
    switch (this.proofType) {
      case "pobl":
        protocolJson = POBLMJSON;
        langJson = POBLLangJSON;
        break;
      case "pog":
        protocolJson = POGJSON;
        langJson = POGLangJSON;
        break;
      case "poe":
        protocolJson = POEJSON;
        langJson = POELangJSON;
        break;
      case "poc":
        let poc = await this.pocJsonService.buildPOCJson(this.nodesWithMerkleTree)
        protocolJson = poc.pocProofJson;
        langJson = poc.pocLangJson;
        break;
      default:
        break;
    }
    if (this.proofType == "poc")
      return { protocolJson: protocolJson, langJson: langJson }
    else
      return { protocolJson: protocolJson.default, langJson: langJson.default };
  }

  handleLangJson(langJson: any) {
    let { Segments, Actions } = langJson;
    var variables = Segments;
    for (let index = 0; index < Actions.length; index++) {
      const action = Actions[index];
      variables = {
        ...variables,
        ...action.Languages
      };
    }
    
    this.proofJSON = this.parseLangData(this.proofJSON, variables);
  }

  parseLangData(action: any, storedData: any = this.variableStorage): any {
    var data = JSON.stringify(action).toString();
    [...data.matchAll(/"\&{[^}]+}"|\&{[^}]+}/g)].forEach(a => {
      try {
        let key = a[0].match(/\&{([^}]+)}/g)[0].slice(2, -1);
        if (key && storedData) {
          var replaceValue = storedData[key];
          var valueType = typeof replaceValue;

          if (valueType == "string" && a[0].match(/"\&{[^}]+}"/g)) {
            try {
              var result = JSON.stringify(replaceValue);
              replaceValue = result;
            } catch (error) {
              replaceValue = `"${replaceValue}"`;
            }
          } else if (valueType == "object")
            replaceValue = JSON.stringify(replaceValue);
          data = data.replace(a[0], replaceValue);
        }
      } catch (error) { }
    });
    return JSON.parse(data);
  }

  getActionConfigurations() {
    if (environment.blockchain.currentEnv == "PROD") {
      var actionConfigs: any = ActionConfigurationsProduction;
      return actionConfigs.default;
    } else if (environment.blockchain.currentEnv == "STAGING") {
      var actionConfigs: any = ActionConfigurationsStaging;
      return actionConfigs.default;
    } else {
      var actionConfigs: any = ActionConfigurationsQa;
      return actionConfigs.default;
    }
  }

  handleMultiStepActions() {
    var proofJSONSteps: any = [];
    var { Steps } = this.proofJSON;
    for (let index = 0; index < Steps.length; index++) {
      const step = Steps[index];
      if (step["Action"].ActionType == "MultiStepAction") {
        var subActions = this.ActionConfigurations[
          step["Action"].ActionParameters.ActionConfigurationID
        ].Actions;
        for (let j = 0; j < subActions.length; j++) {
          const subAction = subActions[j];
          const formattedAction = this.parseSubActionData(
            subAction,
            step["Action"].ActionParameters.SubActionArguments
          );
          formattedAction.Action._ID = proofJSONSteps.length;
          if (!!step.StepHeader.PathID)
            formattedAction["StepHeader"].PathID = step.StepHeader.PathID
          proofJSONSteps.push(formattedAction);
        }
      } else {
        step["Action"]._ID = proofJSONSteps.length;
        if (!!step.StepHeader.PathID)
          step["StepHeader"].PathID = step.StepHeader.PathID
        proofJSONSteps.push(step);
      }
    }
    this.proofJSON.Steps = proofJSONSteps;
  }

  parseSubActionData(action: any, storedData: any = this.variableStorage): any {
    let data = JSON.stringify(action).toString();
    [...data.matchAll(/"\#{[^}]+}"|\#{[^}]+}/g)].forEach(a => {
      try {
        let key = a[0].match(/\#{([^}]+)}/g)[0].slice(2, -1);
        if (key && storedData) {
          var replaceValue = storedData[key];
          var valueType = typeof replaceValue;
          if (valueType == "string" && a[0].match(/"\#{[^}]+}"/g)) {
            try {
              var result = JSON.stringify(replaceValue);
              replaceValue = result;
            } catch (error) {
              replaceValue = `"${replaceValue}"`;
            }
          } else if (valueType == "object")
            replaceValue = JSON.stringify(replaceValue);
          data = data.replace(a[0], replaceValue);
        }
      } catch (error) { }
    });
    return JSON.parse(data);
  }

  filterSegmentsAndActions(Segments: any) {
    return Segments.map((Segment: any) => {
      const SubActions = this.proofJSON.Steps.reduce(
        (subActions: Array<any>, job: any) => {
          const {
            StepHeader: { SegmentNo },
            Action: { _ID, ActionTitle }
          } = job;
          if (SegmentNo == Segment.NO) {
            subActions.push({
              ActionID: _ID,
              ActionName: ActionTitle,
              icon: Segment.Source
            });
          }
          return subActions;
        },
        []
      );
      return {
        ...Segment,
        SubActions
      };
    });
  }

  async scrollToFrameById(frameID: string, offset = 0) {
    const bodyRect: any = document.body.getBoundingClientRect();
    const el: any = document.getElementById(frameID);
    if (!el) return;
    const pcRect = el.getBoundingClientRect();
    const pcWidth = pcRect.x - bodyRect.x;
    const pcHeight = pcRect.y - bodyRect.y;
    window.scroll({
      top: pcHeight - offset,
      left: pcWidth,
      behavior: "smooth"
    });
    await new Promise(resolveTime => setTimeout(resolveTime, 400));
  }

  // player controlls
  setLangFn(lang: string) {
    this.lang = lang;
  }

  togglePlayPauseFn() {
    if (this.isPause) {
      this.isPause = false;
      if (this.isPlayCompleted) this.currentStep = 0;
      this.playProofDemo();
    } else {
      this.isPause = true;
    }
  }

  replayFn() {
    window.location.reload();
    this.StorageTitle = "Storage";
    this.ProofContainerTitle = "Proof Container";
    this.currentStep = 0;
    this.totalSteps = 0;
    this.gsHeightExpand = false;
    this.vsHeightExpand = false;
    this.isPause = false;
    this.isReplay = true;
    this.isLoading = false;
    this.isPlayCompleted = false;
    this.globalData = [];
    this.steppers = [];
    this.demoScreenChildRefs = {};
    this.ActionConfigurations = {};
    this.ActionDescription = "";
    this.playbackSpeed = 1;
    this.isDisableGlobalInformationL = true;
    this.isDisableGlobalInformationR = true;
    this.isBackToStep = false;
    this.proofDemoRef.clear();
    this.cdr.detectChanges();
    this.initiateProofDemo();
  }

  stopFn() {
    this.StorageTitle = "Storage";
    this.ProofContainerTitle = "Proof Container";
    this.currentStep = 0;
    this.lastCompletedStep = 0;
    this.totalSteps = 0;
    this.gsHeightExpand = false;
    this.vsHeightExpand = false;
    this.isStartDemo = false;
    this.isPause = false;
    this.isReplay = false;
    this.isLoading = false;
    this.isPlayCompleted = false;
    this.variableStorage = {};
    this.proofJSON = {};
    this.globalData = [];
    this.steppers = [];
    this.demoScreenChildRefs = {};
    this.ActionDescription = "";
    this.playbackSpeed = 1;
    this.isDisableGlobalInformationL = true;
    this.isDisableGlobalInformationR = true;
    this.isBackToStep = false;
  }

  setSpeed(speed: number) {
    if (!speed || isNaN(speed) || speed == 0)
      alert("Please enter a valid playback speed.");
    else this.playbackSpeed = speed;
  }

  theaterMode() {
    window.open(
      `/proof-verification?type=${this.proofType}&txn=${this.TXNhash}${this.TXNhash2 ? `&txn2=${this.TXNhash2}` : ""
      }`
    );
  }

  async resizeGlobalScreen() {
    this.gsHeightExpand = !this.gsHeightExpand;
    await new Promise(resolveTime => setTimeout(resolveTime, 800));
    this.scrollToFrameById("globalInformation", 10);
  }

  async resizeVerifyScreen() {
    this.vsHeightExpand = !this.vsHeightExpand;
    await new Promise(resolveTime => setTimeout(resolveTime, 800));
    this.scrollToFrameById("verificationScreen", 10);
  }

  backToAction(actionID: number) {
    var i: number = this.proofJSON.Steps.findIndex(
      (cur: any) => cur.Action._ID == actionID
    );
    if (this.lastCompletedStep >= i) {
      this.isBackToStep = true;
      this.currentStep = i;
      if (this.isPause) {
        this.isPause = false;
        this.playProofDemo();
      }
    }
    if (this.isPlayCompleted) {
      this.playProofDemo();
    }
  }

  backToStep(stepNo: number) {
    var i: number = this.proofJSON.Steps.findIndex(
      (cur: any) => cur.StepHeader.SegmentNo == stepNo
    );
    if (this.lastCompletedStep >= i) {
      this.isBackToStep = true;
      this.currentStep = i;
      if (this.isPause) {
        this.isPause = false;
        this.playProofDemo();
      }
    }
    this.playProofDemo();
  }

  async toStepper(no: number, _ID: number) {
    this.SegmentNumber = no;
    try {
      document
        .querySelectorAll("#steppersFrame")[0]
        .classList.add("steppersShow");
      const steppersFrame = document.querySelectorAll(
        "#steppersFrame #segments #stepWrapper"
      )[0];
      const allSteps = document.querySelectorAll(
        "#segments .bs-stepper-header.cs-stepper-header .step"
      );
      var allSegmentLines = document.querySelectorAll(
        "#segments .bs-stepper-header.cs-stepper-header .line"
      );
      const el: any = allSteps[no - 1];
      steppersFrame.scroll({
        top:
          el.offsetTop -
          steppersFrame.getBoundingClientRect().height +
          el.getBoundingClientRect().height,
        left:
          el.offsetLeft -
          steppersFrame.getBoundingClientRect().width +
          el.getBoundingClientRect().width,
        behavior: "smooth"
      });
      el.classList.add("glow");
      for (let i = 0; i < no - 1; i++) {
        allSteps[i].classList.remove("glow");
        allSteps[i].classList.add("success");
        allSegmentLines[i].classList.add("bg-success");
      }
      for (let j = no; j < allSteps.length; j++) {
        allSteps[j].classList.remove("glow");
        allSteps[j].classList.remove("success");
        allSegmentLines[j].classList.remove("bg-success");
      }
      await this.toSubStepper(no, _ID);
      await new Promise(resolveTime =>
        setTimeout(resolveTime, 1000 / this.playbackSpeed)
      );
    } catch (error) {
    }
  }

  async toSubStepper(segmentNo: number, actionID: number) {
    this.subSteppers = this.steppers.find(
      (step: any) => step.NO == segmentNo
    ).SubActions;
    await new Promise(resolveTime => setTimeout(resolveTime, 1000));
    var index = this.subSteppers.findIndex(
      (step: any) => step.ActionID == actionID
    );
    var allSubSteps = document.querySelectorAll(
      "#subSteppers .bs-stepper-header.cs-stepper-header .step"
    );
    var allSubLines = document.querySelectorAll(
      "#subSteppers .bs-stepper-header.cs-stepper-header .line"
    );
    const el: any = allSubSteps[index];
    const subSteppers = document.querySelectorAll(
      "#steppersFrame #subSteppers #stepWrapper"
    )[0];
    var x =
      el.offsetLeft -
      subSteppers.getBoundingClientRect().width +
      el.getBoundingClientRect().width;

    var y =
      el.offsetTop -
      subSteppers.getBoundingClientRect().height +
      el.getBoundingClientRect().height;
    subSteppers.scroll({
      top: y,
      left: x,
      behavior: "smooth"
    });
    el.classList.add("glow");
    for (let i = 0; i < index; i++) {
      allSubSteps[i].classList.remove("glow");
      allSubSteps[i].classList.add("success");
      allSubLines[i].classList.add("bg-success");
    }
    for (let j = index + 1; j < allSubSteps.length; j++) {
      allSubSteps[j].classList.remove("glow");
      allSubSteps[j].classList.remove("success");
      allSubLines[j].classList.remove("bg-success");
    }
  }

  async closeSteppers() {
    document
      .querySelectorAll("#steppersFrame")[0]
      .classList.remove("steppersShow");
    await new Promise(resolveTime => setTimeout(resolveTime, 1200));
  }

  toggleSteppers() {
    document
      .querySelectorAll("#steppersFrame")[0]
      .classList.toggle("steppersShow");
  }

  // main proof actions
  async playProofDemo(step: number = this.currentStep, highlightClickedNode: boolean = false, trustLinks: any[] = [], runningProof: string = "") {
    this.isReplay = false;
    this.isPlayCompleted = false;
    const { Header, Steps } = this.proofJSON;
    this.totalSteps = Steps.length;
    this.currentStep = step;
    this.cdr.detectChanges();
    let currentBrowserScreen = "";
    // //change the all nodes opacity
    // this.changeNodesOpacity("0.25")
    // this.changeArrowsOpacity("0.25")
    for (; this.currentStep < Steps.length;) {
      this.isBackToStep = false;
      if (this.isPause) return;
      if (this.isReplay) return;
      const stepData = this.parseActionData(Steps[this.currentStep]);
      const { StepHeader, Action, Customizations } = stepData;
      const {
        ActionDescription,
        ActionType,
        ActionParameters
      } = Action;
      if(this.proofType=='poc'){
        this.startedProofs.push({
          trustLink:ActionParameters.TrustLinks,
          type:ActionParameters.StartedProofType
        });
      }
      // highlight the running nodes and back-links
      if (!!ActionParameters.StartedProofType && ActionParameters.StartedProofType != "" &&
        !!ActionParameters.TrustLinks && ActionParameters.TrustLinks.length != 0) {
        this.changeSpecificNodeOpacity(ActionParameters.TrustLinks, ActionParameters.StartedProofType)
      }
      if (highlightClickedNode) {
        this.changeSpecificNodeOpacity(trustLinks, runningProof)
      }
      this.currentStep++;
      this.ActionDescription = ActionDescription[this.lang];
      if (StepHeader.SegmentNo) {
        await this.toStepper(StepHeader.SegmentNo, Action._ID);
      }
      const frameID = StepHeader.FrameID;
      this.cdr.detectChanges();
      // set global values
      this.setGlobalValuesOnFrames(Header, stepData);
      switch (ActionType) {
        case "BrowserScreen":
          // await this.closeSteppers();
          currentBrowserScreen = ActionParameters.ExternalURL
          var scRef: ComponentRef<SiteScreenComponent>;
          if (this.demoScreenChildRefs[frameID])
            scRef = this.demoScreenChildRefs[frameID].ref;
          else {
            scRef = await this.createFrameInProofDemo(stepData);
            scRef.instance.setFrameIndex(Object.keys(this.demoScreenChildRefs).length - 1);
          }
          this.setGlobalValuesOnFrames(Header, stepData);
          
          if (scRef && ActionParameters.InnerHTMLPOC) {
            //verification for poc
            if (!!ActionParameters.Compare && !this.verificationStatus(ActionParameters.Compare)) {
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTMLPOCError);
              this.openModal(`${this.commonServices.getProofName(this.proofType)} Failed`, 0, `Verification failed ${this.currentProof} for ${this.currentBatch}`)
            } else {
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTML);
            }
          }
          
          if (scRef && ActionParameters.InnerHTML) {
            //verification for poe,pog,pobl
            if (!!ActionParameters.Compare && !this.verificationStatus(ActionParameters.Compare)) {
              if(this.proofType=='poc'){
                this.setCompletedProofCountOfPOC();
                this.setFailedProofCountOfPOC();
              }
              console.log("comp",this.completedProofs);
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTMLError);
              this.openModal(`${this.commonServices.getProofName(this.proofType)} Failed`, 0, `Verification failed ${this.currentProof} for ${this.currentBatch}`)
            } else {
              if(this.proofType=='poc'){
                this.setCompletedProofCountOfPOC();
                this.setSuccessedProofCountOfPoc();
               }
              console.log("comp",this.completedProofs);
              console.log("comp and success",this.SuccessProofs);
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTML);
            }
          } else if (scRef && ActionParameters.ExternalURL) {
            scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
            await scRef.instance.setPage(ActionParameters.ExternalURL, ActionParameters.Translatable, this.lang);
          }

          if (scRef && ActionParameters.EncodedData) {
            this.isEncodedData=true;
            let Edata = ActionParameters.EncodedData;
            scRef.instance.setEncodedData(Edata,true);
            
          }
          break;
        case "UpdateElementAttribute":
          // await this.closeSteppers();
          await this.handleFormatElementAttribute(stepData);
          break;
        case "FormatDOMText":
          // await this.closeSteppers();
          await this.handleTextStyle(stepData);
          break;
        case "UpdateElementProperty":
          // await this.closeSteppers();
          await this.handleSetData(stepData);
          break;
        case "TriggerElementFunction":
          // await this.closeSteppers();
          await this.handleTriggerFn(stepData);
        case "GetElementAttributeData":
          // await this.closeSteppers();
          await this.handleGetDataFn(stepData);
          break;
        case "InformationStorage":
          await this.handleSaveDataFn(stepData);
          break;
        case "FormatMetaData":
          this.handleVariableFormat(stepData, currentBrowserScreen);
          break;
        default:
          break;
      }

      if (Customizations.ToastMessage) {
        this.toastMSG = Customizations.ToastMessage[this.lang];
        this.toastTop = Customizations.ToastPosition[0];
        this.toastLeft = Customizations.ToastPosition[1];
        this.isToast = true;
      } else if (Customizations.ToastMessage1) {
        this.toastMSG1 = Customizations.ToastMessage1[this.lang];
        this.toastTop1 = Customizations.ToastPosition1[0];
        this.toastLeft1 = Customizations.ToastPosition1[1];
        this.isToast1 = true;
      }

      this.cdr.detectChanges();
      await new Promise(resolveTime =>
        setTimeout(
          resolveTime,
          (100 *
            (Customizations.ActionDuration
              ? Customizations.ActionDuration
              : 1)) /
          this.playbackSpeed
        )
      );
      this.isToast = false;
      this.isToast1 = false;
      if (this.lastCompletedStep < this.currentStep)
        this.lastCompletedStep = this.currentStep;
    }
    if (this.currentStep == Steps.length) {
      this.isPlayCompleted = true;
      this.isPause = true;
    }
  }

  parseActionData(action: any, storedData: any = this.variableStorage): any {
    var data = JSON.stringify(action).toString();
    [...data.matchAll(/"\${[^}]+}"|\${[^}]+}/g)].forEach(a => {
      try {
        let key = a[0].match(/\${([^}]+)}/g)[0].slice(2, -1);
        if (key && (storedData[key] != null || storedData[key] != undefined)) {
          var replaceValue = storedData[key];
          var valueType = typeof replaceValue;
          if (valueType == "string" && a[0].match(/"\${[^}]+}"/g)) {
            try {
              var result = JSON.stringify(replaceValue);
              replaceValue = result;
            } catch (error) {
              replaceValue = `"${replaceValue}"`;
            }
          }
          data = data.replace(a[0], replaceValue);
        }
      } catch (error) { }
    });
    return JSON.parse(data);
  }

  setGlobalValuesOnFrames(
    Header: any,
    { StepHeader, Customizations }: any
  ) {
    const { FrameID } = StepHeader;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent>;
          if (this.demoScreenChildRefs[FrameID])
            scRef = this.demoScreenChildRefs[FrameID].ref;
          if (scRef) {
            if (
              Customizations &&
              Object.keys(Customizations).includes("ScrollToPointer")
            ) {
              scRef.instance.isPointToElement = Customizations.ScrollToPointer;
            } else if (
              Header &&
              Object.keys(Header).includes("ScrollToPointer")
            ) {
              scRef.instance.isPointToElement = Header.ScrollToPointer;
            }
          }
      }
    }
  }

  async createFrameInProofDemo(stepData: any): Promise<ComponentRef<any>> {
    const { StepHeader, Action } = stepData;
    const { FrameID } = StepHeader;
    const {
      ActionTitle,
      ActionType,
    } = Action;

    var component: Type<any>;
    switch (ActionType) {
      case "BrowserScreen":
        component = SiteScreenComponent;
        break;
      case "LoadGraphView":
        component = SiteScreenComponent;
        break;
      case "LoadProof":
        component = SiteScreenComponent;
        break;
      case "LoadProofAndGraphView":
        component = SiteScreenComponent;
        break;
      default:
        break;
    }
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );
    const componentDividerFactory = this.componentFactoryResolver.resolveComponentFactory(
      ElementDividerComponent
    );
    const ref = this.proofDemoRef.createComponent(componentFactory);
    this.proofDemoRef.createComponent(componentDividerFactory);
    this.demoScreenChildRefs[FrameID] = {
      Id: FrameID,
      type: ActionType,
      ref,
      ActionTitle
    };
    this.cdr.detectChanges();
    return ref;
  }

  async handleFormatElementAttribute(stepData: any) {
    const { StepHeader, Action, Customizations } = stepData;
    const { FrameID } = StepHeader;
    const { ActionParameters } = Action;
    const {
      Query,
      QueryIndex,
      ElAttributeName,
      ElAttributeValue,
      ElAttributeValueReplace
    } = ActionParameters;
    const { FrameAutoScroll } = Customizations;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent> = ds.ref;
          if (scRef && Query)
            await scRef.instance.addAttributeToElement(
              Query,
              QueryIndex,
              ElAttributeValueReplace,
              ElAttributeName,
              ElAttributeValue,
              FrameAutoScroll
            );
          break;
        default:
          break;
      }
    }
  }

  async handleTextStyle(stepData: any) {
    const { StepHeader, Action } = stepData;
    const { FrameID } = StepHeader;
    const { ActionParameters } = Action;
    const {
      SelectiveText,
      CaseSensitivity,
      SelectiveTextIndex,
      CSS
    } = ActionParameters;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent> = ds.ref;
          if (scRef && SelectiveText)
            await scRef.instance.styleText(
              SelectiveText,
              CaseSensitivity,
              SelectiveTextIndex,
              CSS
            );
          break;
        default:
          break;
      }
    }
  }

  async handleSetData(stepData: any) {
    const { StepHeader, Action } = stepData;
    const { FrameID } = StepHeader;
    const { ActionParameters } = Action;
    let { Query, QueryIndex, ElProperty, ElPropertyValue } = ActionParameters;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent> = ds.ref;
          if (scRef && Query && ElProperty && ElPropertyValue) {
            if (ElPropertyValue.startsWith('${') && ElPropertyValue.endsWith('}')) {
              ElPropertyValue = "TlVMTA=="
            }
            await scRef.instance.setData(
              Query,
              QueryIndex,
              ElProperty,
              ElPropertyValue
            );
            break;
          }
        default:
          break;
      }
    }
  }

  async handleTriggerFn(stepData: any) {
    const { StepHeader, Action, Customizations } = stepData;
    const { FrameID } = StepHeader;
    const { ActionParameters, ActionResultVariable } = Action;
    const { Query, QueryIndex, ElFunction, ElFunctionArguments } = ActionParameters;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent> = ds.ref;
          if (scRef && Query && ElFunction && ElFunctionArguments) {
            const result = await scRef.instance.triggerFunction(
              Query,
              QueryIndex,
              ElFunction,
              ElFunctionArguments
            );
            if (ActionResultVariable)
              this.variableStorage[ActionResultVariable] = result;
          }
          break;
        default:
          break;
      }
    }
  }

  async handleGetDataFn(stepData: any) {
    const { StepHeader, Action, Customizations } = stepData;
    const { FrameID } = StepHeader;
    const { ActionParameters, ActionResultVariable } = Action;
    const { Query, QueryIndex, ElAttributeName } = ActionParameters;
    var ds = this.demoScreenChildRefs[FrameID];
    if (ds) {
      switch (ds.type) {
        case "BrowserScreen":
          var scRef: ComponentRef<SiteScreenComponent> = ds.ref;
          if (scRef && ElAttributeName) {
            const result = await scRef.instance.getData(
              Query,
              QueryIndex,
              ElAttributeName
            );
            if (ActionResultVariable)
              this.variableStorage[ActionResultVariable] = result;
          }
          break;
        default:
          break;
      }
    }
  }

  handleVariableFormat(stepData: any, currentUrl: any) {
    const { StepHeader, Action, Customizations } = stepData;
    const { StepNo, SegmentNo, FrameID, FrameTitle } = StepHeader;
    const { ActionParameters, ActionResultVariable, MetaData } = Action;
    const { FormatType } = ActionParameters;
    var val = this.variableStorage[MetaData[0]];
    switch (FormatType) {
      case "parseJson":
        try {
          var res = JSON.parse(val);
          this.variableStorage[ActionResultVariable] = res;
        } catch (error) {
          this.variableStorage[ActionResultVariable] = MetaData[0];
        }
        break;
      case "stringifyJson":
        this.variableStorage[ActionResultVariable] = JSON.stringify(val);
        break;
      case "jsonKeyPicker":
        if (!!!this.jsonKeyPicker(val, MetaData[1], MetaData[2]) && this.proofType != 'poc') {
          this.toastr.error(`Cannot find given key from the URL`, currentUrl);
          break;
        }
        var result = this.jsonKeyPicker(val, MetaData[1], MetaData[2])[1];
        if (MetaData[3])
          this.variableStorage[ActionResultVariable] = result[MetaData[3]];
        else this.variableStorage[ActionResultVariable] = result;
        break;
      case "jsonValueObjectPicker":

        this.variableStorage[ActionResultVariable] = this.jsonValueObjectPicker(
          val,
          MetaData[1],
          MetaData[2]
        )[MetaData[3]];
        break;
      default:
        break;
    }
  }

  findAllValuesOfAKey(obj: any, key: string, caseSensitive: boolean = true) {
    var values = [];
    key = !caseSensitive ? key.toLowerCase() : key;
    for (var i in obj) {
      i = !caseSensitive ? i.toLowerCase() : i;
      if (key == i) values.push(obj[i]);
      if (obj.hasOwnProperty(i)) {
        var sValues = this.findAllValuesOfAKey(obj[i], key, caseSensitive);
        values = values.concat(sValues);
      }
    }
    return values;
  }

  jsonKeyPicker(obj: any, k: string, selfReturn: boolean = false) {
    if (typeof obj !== 'object' || obj === null) {
      return null;
    }
    for (var key in obj) {
      var value = obj[key];
      if (k == key) {
        return [k, value];
      }
      if (typeof value === "object" && !Array.isArray(value)) {
        var y = this.jsonKeyPicker(value, k, selfReturn);
        if (y && y[0] == k) return y;
      }
      if (Array.isArray(value)) {
        for (var i = 0; i < value.length; ++i) {
          var x = this.jsonKeyPicker(value[i], k, selfReturn);
          if (x && x[0] == k) return x;
        }
      }
    }
    return selfReturn ? obj : null;
  }

  jsonValueObjectPicker(obj: any, v: string, caseSensitive: boolean = false) {
    for (var key in obj) {
      v = !caseSensitive ? v.toLowerCase() : v;
      var value = obj[key];
      if (typeof value === "object" && !Array.isArray(value)) {
        var r = this.jsonValueObjectPicker(value, v, caseSensitive);
        if (Object.keys(r).length > 0) return r;
      } else if (Array.isArray(value)) {
        for (var i = 0; i < value.length; ++i) {
          var r = this.jsonValueObjectPicker(value[i], v, caseSensitive);
          if (Object.keys(r).length > 0) return r;
        }
      } else {
        value = value.toString();
        value = !caseSensitive && value.toLowerCase();
        if (v == value) return obj;
      }
    }
    return {};
  }

  async handleSaveDataFn(stepData: any) {
    const { StepHeader, Action, Customizations } = stepData;
    const { StepNo, SegmentNo, FrameID, FrameTitle } = StepHeader;
    const { ActionParameters, ActionResultVariable } = Action;
    const { StorageData, Compare, GivenDataToStorageData } = ActionParameters;
    this.addDataToGlobalData(
      FrameID,
      this.demoScreenChildRefs[FrameID].ShortFrameTitle,
      StorageData,
      GivenDataToStorageData, ActionResultVariable
    );
  }

  async addDataToGlobalData(Id: number, Title: string, storageData: DataKeys[], givenDataToStorageData: DataKeys, actionVariable: string) {
    let Data = storageData
    for (let j = 0; j < Data.length; j++) {
      if (Data[j].Value.startsWith("${") && Data[j].Value.endsWith("}")) {
        // if key can not find from website NULL= "TlVMTA==" replace by tracified as a value
        Data[j].Value = "TlVMTA=="
      } else if (this.proofType == "poe" && Data[j].CompareType == "notEmpty" && Data[j].Value == Data[j].CompareValue) {
        this.openModal("Proof of Existence Verification Failed", "442", Data[j].Error)
      } else if (Data[j].CompareType == "string" && Data[j].Value != Data[j].CompareValue) {
        this.openModal("Proof Verification Failed", 442, "Key Comparison error")
      } else { }
    }
    var index = this.globalData.findIndex((curr: any) => curr.Id == Id);
    if (!!givenDataToStorageData) {
      switch (givenDataToStorageData.Type) {
        case "pobl":
          givenDataToStorageData.Value = this.proofBotParams.params.txn2
          Data.push({
            Key: givenDataToStorageData.Key,
            Value: givenDataToStorageData.Value,
            Type: "",
            CompareType: "",
            CompareValue: "",
            Error: ""
          });
          this.variableStorage[actionVariable] = givenDataToStorageData.Value
          break;
          case "poblOfPoc":
            Data.push({
              Key: givenDataToStorageData.Key,
              Value: givenDataToStorageData.Value,
              Type: "",
              CompareType: "",
              CompareValue: "",
              Error: ""
            });
            this.variableStorage[actionVariable] = givenDataToStorageData.Value
          break;
        default:
        // code block
      }
    }

    if (index == -1) {
      index = this.globalData.length;
      this.globalData.push({
        Id,
        Title,
        Data
      });
    } else {
      const curr: any = this.globalData[index];
      for (let j = 0; j < Data.length; j++) {
        const dataItem: any = Data[j];
        var i = curr.Data.findIndex((curr: any) => curr.Key == dataItem.Key);
        if (i != -1) curr.Data[i].Value = dataItem.Value;
        else curr.Data = [...curr.Data, dataItem];
      }
      this.globalData = [
        ...this.globalData.slice(0, index),
        curr,
        ...this.globalData.slice(index + 1)
      ];
    }
    this.cdr.detectChanges();
    await new Promise(resolveTime => setTimeout(resolveTime, 400));
    await this.scrollIntoStorageView(Id);
    var indexTable: any = document
      .querySelectorAll("#globalInformation #gsFrames proof-global-storage")
    [index].querySelectorAll(".data-table")[0];
    indexTable.scrollTop = indexTable.scrollHeight;
  }

  async scrollIntoStorageView(id: number) {
    const index = this.globalData.findIndex((curr: any) => curr.Id == id);
    if (index == -1) return;
    const el: any = document.querySelectorAll(
      "#globalInformation #gsFrames proof-global-storage"
    )[index];
    var gsFrame = document.querySelectorAll("#globalInformation #gsFrames")[0];
    var gsFrameRect: any = gsFrame.getBoundingClientRect();
    var initialWidth = gsFrameRect.x;
    gsFrame.scroll({
      top: 0,
      left: el.offsetLeft - initialWidth,
      behavior: "smooth"
    });
    await new Promise(resolveTime => setTimeout(resolveTime, 1200));
    el.scroll({
      top: el.scrollHeight,
      left: 0,
      behavior: "smooth"
    });
    await new Promise(resolveTime => setTimeout(resolveTime, 400));
  }

  scrollWithinGlobalStorage(side: string) {
    var globalInformationScrollPos = document.querySelectorAll(
      "#globalInformation #gsFrames"
    )[0].scrollLeft;
    var minScrollWidth =
      document
        .querySelectorAll("#globalInformation #gsFrames")[0]
        .getBoundingClientRect().width / 4;
    switch (side) {
      case "L":
        if (globalInformationScrollPos - minScrollWidth >= 0)
          globalInformationScrollPos -= minScrollWidth;
        else globalInformationScrollPos = 0;
        break;
      default:
        var maxRange = document.querySelectorAll(
          "#globalInformation #gsFrames"
        )[0].scrollWidth;
        if (globalInformationScrollPos + minScrollWidth <= maxRange)
          globalInformationScrollPos += minScrollWidth;
        else globalInformationScrollPos = maxRange;
    }
    document.querySelectorAll("#globalInformation #gsFrames")[0].scrollTo({
      top: 0,
      left: globalInformationScrollPos,
      behavior: "smooth"
    });

    this.isDisableGlobalInformationL = this.isDisableGlobalStorageScroll("L");
    this.isDisableGlobalInformationR = this.isDisableGlobalStorageScroll("R");
  }

  isDisableGlobalStorageScroll(side: string): boolean {
    try {
      var globalInformationScrollPos = document.querySelectorAll(
        "#globalInformation #gsFrames"
      )[0].scrollLeft;
      switch (side) {
        case "L":
          if (globalInformationScrollPos == 0) return true;
          break;
        default:
          var globalInformationFrame: any = document.querySelectorAll(
            "#globalInformation #gsFrames"
          )[0];
          if (
            globalInformationFrame.scrollLeft +
            globalInformationFrame.offsetWidth >=
            globalInformationFrame.scrollWidth
          )
            return true;
      }
    } catch (error) {
      return true;
    }
    return false;
  }

  public verificationStatus(compare: any): boolean {
    let status = true
    switch (this.proofType) {
      case "pobl":
        if (this.variableStorage[compare.blockchainValue1] != this.variableStorage[compare.expectedValue1]) {
          if (this.variableStorage[compare.blockchainValue2] != this.variableStorage[compare.expectedValue1]) {
            status = false
            this.toastr.error("Blockchain and Tracified data hashes does not match.", "Backlinks Verification Failed")
          }
        }
        if (this.variableStorage[compare.blockchainValue2] != this.variableStorage[compare.expectedValue1]) {
          if (this.variableStorage[compare.blockchainValue1] != this.variableStorage[compare.expectedValue1]) {
            status = false
            this.toastr.error("Blockchain and Tracified data hashes does not match.", "Backlinks Verification Failed")
          }
        }
        break;
      case "poe":
        if (this.variableStorage[compare.t1] != this.variableStorage[compare.t2]||this.variableStorage[compare.t3] != this.variableStorage[compare.t4]) {
          status = false
          this.toastr.error("Blockchain and Tracified data hash are not equal", "POE Verification Failed")
        }
        break;
      case "pog":
        if (this.variableStorage[compare.t1] != compare.t2) {
          status = false
          this.toastr.error("Previous transaction hash is not empty.", "POG Verification Failed");
        }
        break;
      case "poc":
        if (this.TotalProofCountOfPOC != this.completedProofs.length) {
          if (this.currentProof == "Proof of Existence") {
            if (this.variableStorage[compare.t1] != this.variableStorage[compare.t2]) {
              status = false
              this.toastr.error("Blockchain and Tracified data hash are not equal", "POE Verification Failed")
            }
          } else if (this.currentProof == "Proof of Genesis") {
            if (this.variableStorage[compare.t1] != compare.t2) {
              status = false
              this.toastr.error("Previous transaction hash is not empty.", "POG Verification Failed");
            }
          }
          else if (this.currentProof == "Proof of Backlinks") {
            if (this.variableStorage[compare.blockchainValue1] != this.variableStorage[compare.expectedValue1]) {
              if (this.variableStorage[compare.blockchainValue2] != this.variableStorage[compare.expectedValue1]) {
                status = false
                this.toastr.error("Blockchain and Tracified data hashes does not match.", "Backlinks Verification Failed")
              }
            }
            if (this.variableStorage[compare.blockchainValue2] != this.variableStorage[compare.expectedValue1]) {
              if (this.variableStorage[compare.blockchainValue1] != this.variableStorage[compare.expectedValue1]) {
                status = false
                this.toastr.error("Blockchain and Tracified data hashes does not match.", "Backlinks Verification Failed")
              }
            }
          }
        }
        else if ((this.TotalProofCountOfPOC == this.completedProofs.length)) {
          if (this.SuccessProofs.length == this.TotalProofCountOfPOC) {
            status = true;
          } else {
            status = false;
            this.toastr.error("Blockchain  not have proper countinity ", "Proof Countinuity Verification Failed")
          }
        }

        break;
      default:
        status = true
        break;
    }
    return status
  }

  openModal(errorTitle?, m1?, m2?) {
    this.togglePlayPauseFn()
    const initialState: ModalOptions = {
      initialState: {
        retry: this.onRetry,
        errorTitle: errorTitle || "",
        m1: m1 || 0,
        m2: m2 || "",
        title: 'Error Message'
      }
    };
    this.modalService.show(ErrorModalComponent, initialState);
  }

  onRetry() {
    window.location.reload();
  }
  
  changeNodesOpacity() {
    if (this.proofType == 'poc') {
      let nodes = document.getElementsByClassName('node')
      Array.from(nodes).forEach((node: any) => {
        let rec:any= document.querySelector(`#${node.id} > rect`)
        rec.style['stroke']='white'
      })
    }
  } 

  changeSpecificNodeOpacity(trustLinks: any[], runningProof: string) {
    this.changeNodesOpacity()
    this.changeArrowsOpacity()
    if (this.proofType == 'poc') {
      if (runningProof == 'POE'|| runningProof == 'poe' || runningProof == "POG"||runningProof == 'pog') {
        let id = `node-${trustLinks[0]}`;
        let rec:any= document.querySelector(`#${id} > rect`)
        rec.style['stroke']='black'
        rec.style['stroke-width']='4'
        this.currentProof = this.commonServices.getProofName(runningProof);
        let nodeText = d3.select(`#${id}`);
        let textContent = nodeText.text();
        let productIndex = textContent.indexOf(' Product: ')
        this.currentBatch = textContent
        this.currentProduct = textContent.substring(productIndex + 8)
        this.currentId = id;
        this.currentProofType= runningProof.toLowerCase();
      } else if (runningProof == 'POBL'||runningProof == 'pobl') {
        const tL = trustLinks[0];
        let id = `arrow-` + tL[0] + `-` + tL[1];
        this.currentId = id;
        this.currentProof = this.commonServices.getProofName(runningProof);
        this.currentProofType= runningProof.toLowerCase();
        let node: any = document.getElementById(id);
        node.style = "opacity:1;";
        const node1 = d3.select(`#${id}`);
        node1.attr("stroke", "black");
        let textContent1 = "";
        let textContent2 = "";
        let nodeText1 = d3.select(`#node-${tL[0]}`);
        if (!nodeText1.empty())
          textContent1 = nodeText1.text();
        let nodeText2 = d3.select(`#node-${tL[1]}`);
        if (!nodeText2.empty())
          textContent2 = nodeText2.text();
        let productIndex1 = textContent1.indexOf('Product:');
        let productIndex2 = textContent2.indexOf('Product:');
        this.currentBatch = textContent1
        this.currentBatch2 = textContent2
        this.currentProduct = textContent1.substring(productIndex1 + 8);
        this.currentProduct2 = textContent2.substring(productIndex2 + 8);
      }
    }
  }

  changeArrowsOpacity() {
    if (this.proofType == 'poc') {
      let nodes = document.getElementsByClassName('edgePath')
      Array.from(nodes).forEach((node: any) => {
        let rec:any= document.querySelector(`#${node.id} > path`)
        node.style['stroke']='white'
      })
    }
  }

  clickedNode(event: string) {
    this.jumpToStep(event)
  }

  refreshIframe(){
    var iframe = this.elRef.nativeElement.querySelector('iframe');
    var botGlobalData = this.elRef.nativeElement.querySelector('gsFrames');
    var currentFrame = iframe.contentWindow;
    iframe.contentWindow.location.reload(true);
    this.playbackSpeed = 0.5;
    
  }

  async playProofDemoOfSelectedNode(step: number = this.currentStep, highlightClickedNode: boolean = false, trustLinks: any[] = [], runningProof: string = "") {
    this.globalData.splice(0,this. globalData.length);
    this.refreshIframe();
    this.isReplay = false;
    this.isPlayCompleted = false;
    const { Header, Steps } = this.proofJSON;
    this.totalSteps = Steps.length;
    this.currentStep = step;
    this.cdr.detectChanges();
    let currentBrowserScreen = "";
    //change the all nodes opacity
    this.changeNodesOpacity()
    this.changeArrowsOpacity()
    for (; this.currentStep < Steps.length;) {
      this.isBackToStep = false;
      if (this.isPause) return;
      if (this.isReplay) return;
      const stepData = this.parseActionData(Steps[this.currentStep]);
      const { StepHeader, Action, Customizations } = stepData;
      const {
        ActionDescription,
        ActionType,
        ActionParameters
      } = Action;

      // highlight the running nodes and back-links
      if (!!ActionParameters.StartedProofType && ActionParameters.StartedProofType != "" &&
        !!ActionParameters.TrustLinks && ActionParameters.TrustLinks.length != 0) {
       this.changeSpecificNodeOpacity(ActionParameters.TrustLinks, ActionParameters.StartedProofType)
      }
      this.currentStep++;
      this.ActionDescription = ActionDescription[this.lang];
      if (StepHeader.SegmentNo) {
        await this.toStepper(StepHeader.SegmentNo, Action._ID);
      }
      const frameID = StepHeader.FrameID;
      this.cdr.detectChanges();
      // set global values
      this.setGlobalValuesOnFrames(Header, stepData);
      switch (ActionType) {
        case "BrowserScreen":
          // await this.closeSteppers();
          currentBrowserScreen = ActionParameters.ExternalURL
          var scRef: ComponentRef<SiteScreenComponent>;
          if (this.demoScreenChildRefs[frameID])
            scRef = this.demoScreenChildRefs[frameID].ref;
          else {
            scRef = await this.createFrameInProofDemo(stepData);
            scRef.instance.setFrameIndex(Object.keys(this.demoScreenChildRefs).length - 1);
          }
          this.setGlobalValuesOnFrames(Header, stepData);
          if (scRef && ActionParameters.InnerHTML) {
            if (!!ActionParameters.Compare && !this.verificationStatus(ActionParameters.Compare)) {
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTMLError);
              this.openModal(`${this.commonServices.getProofName(this.proofType)} Failed`, 0, `Verification failed ${this.currentProof} for ${this.currentBatch}`)
            } else {
              scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
              await scRef.instance.setPageHTML(ActionParameters.ExternalURL, ActionParameters.InnerHTML);
            }
          } else if (scRef && ActionParameters.ExternalURL) {
            scRef.instance.setFrameTitle(StepHeader.FrameTitle[this.lang]);
            await scRef.instance.setPage(ActionParameters.ExternalURL, ActionParameters.Translatable, this.lang);
          }
          break;
        case "UpdateElementAttribute":
          // await this.closeSteppers();
          await this.handleFormatElementAttribute(stepData);
          break;
        case "FormatDOMText":
          // await this.closeSteppers();
          await this.handleTextStyle(stepData);
          break;
        case "UpdateElementProperty":
          // await this.closeSteppers();
          await this.handleSetData(stepData);
          break;
        case "TriggerElementFunction":
          // await this.closeSteppers();
          await this.handleTriggerFn(stepData);
        case "GetElementAttributeData":
          // await this.closeSteppers();
          await this.handleGetDataFn(stepData);
          break;
        case "InformationStorage":
          await this.handleSaveDataFn(stepData);
          break;
        case "FormatMetaData":
          this.handleVariableFormat(stepData, currentBrowserScreen);
          break;
        default:
          break;
      }

      if (Customizations.ToastMessage) {
        this.toastMSG = Customizations.ToastMessage[this.lang];
        this.toastTop = Customizations.ToastPosition[0];
        this.toastLeft = Customizations.ToastPosition[1];
        this.isToast = true;
      } else if (Customizations.ToastMessage1) {
        this.toastMSG1 = Customizations.ToastMessage1[this.lang];
        this.toastTop1 = Customizations.ToastPosition1[0];
        this.toastLeft1 = Customizations.ToastPosition1[1];
        this.isToast1 = true;
      }

      this.cdr.detectChanges();
      await new Promise(resolveTime =>
        setTimeout(
          resolveTime,
          (100 *
            (Customizations.ActionDuration
              ? Customizations.ActionDuration
              : 1)) /
          this.playbackSpeed
        )
      );
      this.isToast = false;
      this.isToast1 = false;
      if (this.lastCompletedStep < this.currentStep)
        this.lastCompletedStep = this.currentStep;
    }
    if (this.currentStep == Steps.length) {
      this.isPlayCompleted = true;
      this.isPause = true;
    }
  }
  
  jumpToStep(id: string) {
    let stepIndex = this.findStepByPathId(id, this.proofJSON.Steps)
    var index = this.globalData.findIndex((curr: any) => curr.Id == this.proofJSON.Step.StepHeader.FrameID);
    if (!!stepIndex) {
      let proofArr = id.split('-')
      if (!!proofArr[0] && proofArr[0] != "pobl") {
        let a1 = proofArr.slice(-1)
        this.globalData.splice(0, this.globalData.length);
        this.refreshIframe();
        this.playProofDemo(stepIndex - 2, true, [a1], proofArr[0].toUpperCase())
       // this.changeStrokeColor();
        
      } else {
        let a2 = proofArr.slice(-2)
        this.globalData.splice(0, this.globalData.length);
        this.refreshIframe();
        this.playProofDemo(stepIndex - 2, true, [a2], proofArr[0].toUpperCase())
       // this.changeStrokeColor();
      }
    }
  }
  // array can be very large there for use this method
  public findStepByPathId(id, array) {
    // Create a hash table that maps the id of each element to its index in the array
    let idToIndexTable = {};
    for (let i = 0; i < array.length; i++) {
      if (!!array[i].StepHeader.PathID)
        idToIndexTable[array[i].StepHeader.PathID] = i;
    }
    // Use the hash table to get the index of the element with the specified id
    let element = idToIndexTable[id];
    if (element !== undefined) {
      return element;
    } else {
      return null; // or any other appropriate value to indicate element not found
    }
  }

  hasTxnTypeMerge(json) {
    for (const key in json) {
      const txnType = json[key].Data.TxnType;
      if (txnType === "7" || txnType === "8") {
        return true;
      }
    }
    return false;
  }

  setCompletedProofCountOfPOC(){
    this.completedProofs.push({
      CompletedProofType:this.currentProofType,
      TxnHash:this.currentId
    });
  }
  setSuccessedProofCountOfPoc(){
    this.SuccessProofs.push({
      SuccessProofType:this.currentProof,
      TxnHash:this.currentId
    })
  }

  setFailedProofCountOfPOC(){
    this.FailedProofs.push({
      FailedProofType:this.currentProof,
      TxnHash:this.currentId
    })
  }
}