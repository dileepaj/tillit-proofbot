import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { decode } from "js-base64";
import { BsModalService } from 'ngx-bootstrap';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { TransactionDataService } from "src/app/services/transaction-data.service";
import { VerificationServiceService } from "src/app/services/verification-service.service";
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
import { IBase64 } from "src/app/shared/models/base64.model";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-metric-proof',
  templateUrl: './metric-proof.component.html',
  styleUrls: ['./metric-proof.component.css'],
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
export class MetricProofComponent implements OnInit {
  initialWidth: string = "100%";
  initialHeight: string = "100%";
  minWidth: string = "100%";
  minHeight: string = "100%";
  maxWidth: string = "100%";
  maxHeight: string = "100%";
  justifyContent: string = "center";
  alignItems: string = "center";
  frameData: any = {};
  currentStep: number = 0;
  lastCompletedStep: number = 0;
  totalSteps: number = 0;
  gsHeightExpand: boolean = false;
  vsHeightExpand: boolean = false;
  isEmbedded: boolean = false;
  isAutoScale: boolean = true;
  product: string;
  batch: string;
  hash: string;
  metric: string
  countdown = 5;
  showBatchHistory = false;
  lang = "en"
  cfResult = "12"
  nodes: any
  tdpId: any;
  loadingComplete: boolean;
  errorOccurred: boolean;
  error: { errorTitle: string; errorMessage: string; errorMessageSecondary: string; errorType: string; };
  txnItem: { status: any; txnHash: any; transferType: any; sequence: any; txnUrl: any; labTxnUrl: any; publickKey: any; identifier: any; tdpId: any; timestamp: any; ledger: any; fee: any; availableProofs: any; productId: any; productName: any; stageId: any; blockchain: any; images: any[]; geolocation: any; tenantName: any; createdAt: any; };
  enableSlider: boolean;
  nodesWithMerkleTree: any;
  pocData: any= {};
  tenantId: string;
  stage: string;
  constructor(
    private route: ActivatedRoute,
    public commonServices: CommonService,
    private router: Router,
    private verificationHttpService: VerificationServiceService,
    private apiService: ApiService,
    private modalService: BsModalService,
    private transactionDataService: TransactionDataService,
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.paramMap.get('product')
    this.batch = this.route.snapshot.paramMap.get('batch')
    this.hash = this.route.snapshot.paramMap.get('hash')
    this.metric = this.route.snapshot.paramMap.get('metric')
    this.addTransactionDetailsToSessionStorage(this.hash)
    
  }

  addTransactionDetailsToSessionStorage(txnId: string) {
    if (sessionStorage.getItem(`${txnId}`)) {
      this.txnItem = JSON.parse(sessionStorage.getItem(`${txnId}`))
      this.loadingComplete = true;
    } else {
      this.loadingComplete = false;
      this.getTransactionDetails(txnId)
    }
  }

  getTransactionDetails(txnId: string): void {
    this.transactionDataService.getTransactions(txnId, 1, 10).subscribe((transaction) => {
      if (transaction == null) {
        this.loadingComplete = true;
        this.errorOccurred = true;
        this.error = {
          errorTitle: "No matching results found.",
          errorMessage: "There is no data associated with the given transaction hash. Check if the entered transaction hash is correct and try again.",
          errorMessageSecondary: "If you still don't see the results you were expecting, please let us know.",
          errorType: "empty"
        }
      }
      if (transaction[0].TxnType == "tdp") {
        this.transactionDataService.getTracifiedDataPackets(transaction[0].TdpId).subscribe((base64Data: IBase64) => {
          this.loadingComplete = true;
          let tdp: any = JSON.parse(decode(base64Data.data));
          this.txnItem = {
            status: transaction[0].Status,
            txnHash: transaction[0].Txnhash,
            transferType: transaction[0].TxnType,
            sequence: transaction[0].SequenceNo,
            txnUrl: transaction[0].Url,
            labTxnUrl: transaction[0].LabUrl,
            publickKey: transaction[0].SourceAccount,
            identifier: transaction[0].Identifier,
            tdpId: transaction[0].TdpId,
            timestamp: transaction[0].Timestamp,
            ledger: transaction[0].Ledger,
            fee: transaction[0].FeePaid,
            availableProofs: transaction[0].AvailableProof,
            productId: tdp.header.item.itemID,
            productName: tdp.header.item.itemName,
            stageId: tdp.header.stageID,
            blockchain: transaction[0].Blockchain,
            images: [],
            geolocation: transaction[0].GeoLocation,
            tenantName: transaction[0].TenantName,
            createdAt: transaction[0].CreatedAt,
          }
         

          if (tdp.data) {
            //   check image exist in object
            for (let [key, value] of Object.entries(tdp.data)) {
              if (Array.isArray(value) && value.length > 0)
                value.map((imageData) => {
                  if (!!imageData.image && imageData.image != '') {
                    this.txnItem.images.push(imageData);
                    this.enableSlider = true;
                  }
                })
            }
          }
          if (!!this.txnItem) {
            sessionStorage.setItem(`${txnId}`, JSON.stringify(this.txnItem))
          }
        }, (err) => {
          this.loadingComplete = true;
          this.errorOccurred = true;
          if (err.status === 400) {
            this.error = {
              errorTitle: "No matching results found.",
              errorMessage: "There is no data associated with the given ID. Check if the entered ID is correct and try again.",
              errorMessageSecondary: "If you still don't see the results you were expecting, please let us know.",
              errorType: "empty"
            }
          } else {
            this.error = {
              errorTitle: "Something went wrong.",
              errorMessage: "An error occurred while retrieving data. Check if the entered ID is correct and try again in a while.",
              errorMessageSecondary: "If you still don't see the results you were expecting, please let us know.",
              errorType: "empty"
            }
          }
        });
      }
      
  }, (err) => {
    this.loadingComplete = true;
    this.errorOccurred = true;
    if (err.status === 400) {
      this.error = {
        errorTitle: "No matching results found.",
        errorMessage: "There is no data associated with the given ID. Check if the entered ID is correct and try again.",
        errorMessageSecondary: "If you still don't see the results you were expecting, please let us know.",
        errorType: "empty"
      }
    } else {
      this.error = {
        errorTitle: "Something went wrong.",
        errorMessage: "An error occurred while retrieving data. Check if the entered ID is correct and try again in a while.",
        errorMessageSecondary: "If you still don't see the results you were expecting, please let us know.",
        errorType: "empty"
      }
    }
  });
}

  openModal(errorTitle?, m1?, m2?) {
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

  onProceed() {
    
    this.getProofTree(this.hash);
    
  }

  onBack() {
      this.showBatchHistory = !this.showBatchHistory;
  }
  async getProofTree(id: string) {
    await this.getProofTreeOne(id);
    this.updateChildren();
    this.nodesWithMerkleTree = this.pocData;
    this.nodes = this.pocData;
    this.showBatchHistory = !this.showBatchHistory;
  }

  async getProofTreeOne(id: string) {
    let data = await this.apiService.getPocTreeData(id).toPromise()
    if (this.isEmptyObject(this.pocData)) {
      this.pocData = data;
    } else {
      this.pocData.LastTxnHash = data.LastTxnHash;
      for (const nodeId in data.Nodes) {
        if (!this.pocData.Nodes.hasOwnProperty(nodeId)) {
          this.pocData.Nodes[nodeId] = data.Nodes[nodeId];
        }
      }
    }

    for (const nodeId in data.Nodes) {
      this.pocData.LastTxnHash = data.LastTxnHash;
      if (data.BackLinkParents != undefined && data.BackLinkParents != null) {
        for (let index = 0; index < data.BackLinkParents.length; index++) {
          let foundHash = false;
          for (const nodeIdPoc in this.pocData.Nodes) {
            if (this.pocData.Nodes[nodeIdPoc].TrustLinks[0] == data.BackLinkParents[index]) {
              foundHash = true;
            }
          }
          if (!foundHash && !!data.BackLinkParents[index]) {
            await this.getProofTreeOne(data.BackLinkParents[index]);
          }
        }

      }
    }
  }

  updateChildren() {
    for (const nodeId in this.pocData.Nodes) {
      if (this.pocData.Nodes[nodeId].Parents != null) {
        for (let i = 0; i < this.pocData.Nodes[nodeId].Parents.length; i++) {
          const parentNodeId = this.pocData.Nodes[nodeId].Parents[i];
          if (this.pocData.Nodes[parentNodeId] != undefined && this.pocData.Nodes[parentNodeId].Children != null
            && !this.pocData.Nodes[parentNodeId].Children.includes(nodeId)) {
            this.pocData.Nodes[parentNodeId].Children.push(nodeId);
          } else {
            this.pocData.Nodes[parentNodeId].Children = [nodeId];
          }
        }
      }
    }
  }

  isEmptyObject(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        return false;
      }
    }
    return true;
  }

  clickedNode(event: string) {
    this.getTransactionMetricQueries(event)
    console.log("this.pocData",this.pocData)
  }
  getTransactionMetricQueries(txn: string) {
    console.log("txn passed to getTransaction",txn)
    this.verificationHttpService.loadPage(environment.blockchain.getTransactionData + "?txn=" + txn + "&page=1&perPage=10").subscribe(
      async data => {
        try {
          if (!data) {
            this.openModal("Invalid URL", 204,"Apologies, but there are no transaction details available in the database for the provided transaction hash.")
            //this.isProofTypeAvailable=false;
            return
          } else {
            let dataJson = JSON.parse(data)
           this.product = !!dataJson[0].CreatedAt?this.commonServices.decodeFromBase64(dataJson[0].ProductName) : dataJson[0].ProductName;
           this.batch = dataJson[0].Identifier
            this.tdpId = dataJson[0].TdpId
            this.tenantId=dataJson[0].TenantID
            console.log("tdpId",this.tdpId);
            console.log("tenantId",this.tenantId);
            console.log("data----",dataJson);

            this.verificationHttpService.loadPage(environment.backend.getMetricQueryDetails + "?tenantId="+this.tenantId+"&tdpId="+this.tdpId).subscribe(
              async data => {
                try {
                  if (!data) {
                    this.openModal("Invalid URL", 204,"Apologies, but there are no transaction details available in the database for the provided transaction hash.")
                    //this.isProofTypeAvailable=false;
                    return
                  } else {
                    let dataMetricJson = JSON.parse(data)
                   // if(dataMetricJson.)
                    let idToIndexTable = {};
                    let availableMetrics ={};
                    for (let i = 0; i <dataMetricJson.length; i++) {
                      if (dataMetricJson[i].total>0){
                        idToIndexTable[data[i]] = i;
                        console.log("kkkkkk")}
                    }
                  
                    console.log("data----",dataMetricJson);
                  }
                } catch (error) {
                  this.openModal("Invalid URL", 404, error.message)
                }
              },
              error => {
                this.openModal("Check the Internet Connection", error.status, error.message)
              }
            );
          }
        } catch (error) {
          this.openModal("Invalid URL", 404, error.message)
        }
      },
      error => {
        this.openModal("Check the Internet Connection", error.status, error.message)
      }
    );

    
    
  }
  
 

}
