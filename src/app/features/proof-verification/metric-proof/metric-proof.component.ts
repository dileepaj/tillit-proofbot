import { animate, style, transition, trigger } from "@angular/animations";
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalService } from 'ngx-bootstrap';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { ApiService } from 'src/app/services/api.service';
import { CommonService } from 'src/app/services/common.service';
import { ErrorModalComponent } from 'src/app/shared/components/error-modal/error-modal.component';
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
  constructor(
    private route: ActivatedRoute,
    public commonServices: CommonService,
    private router: Router,
    private apiService: ApiService,
    private modalService: BsModalService,
  ) { }

  ngOnInit() {
    this.product = this.route.snapshot.paramMap.get('product')
    this.batch = this.route.snapshot.paramMap.get('batch')
    this.hash = this.route.snapshot.paramMap.get('hash')
    this.metric = this.route.snapshot.paramMap.get('metric')
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
    let url = environment.blockchain.getPocTreeData + this.hash
    console.log('url', url)
    this.apiService.getData(url).subscribe((data) => {
      this.nodes = data
      this.showBatchHistory = !this.showBatchHistory;
    }, (err) => {
      this.openModal("Invalid URL", err.status, err.message)
    })
  }

  onBack() {
      this.showBatchHistory = !this.showBatchHistory;
  }
}
