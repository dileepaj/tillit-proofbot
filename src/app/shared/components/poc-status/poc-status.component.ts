import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
import { CommonService } from "src/app/services/common.service";
@Component({
  selector: "app-poc-status",
  templateUrl: "./poc-status.component.html",
  styleUrls: ["./poc-status.component.css"]
})
export class POCStatus implements OnInit {

  @Input() retry: any;
  @Output() backToStepFn = new EventEmitter();
  @Input() steppers: any[];
  successProofs: any[];
  failedProofs: any[];
  missedProofs: any[];
  SProofName: string;
  SBatch: string;
  SBatch2: string;
  FProofName: string;
  FBatch: string;
  FBatch2: string;
  MProofName: string;
  MProofType: string;
  MBatch: string;
  MStage: string;
  MBatch2: string;
  MStage2: string;
  TransactionType: any;
  completedProofs: any;
  isPOCcompleted: boolean;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef, public commonServices: CommonService,) { }

  ngOnInit() {
    let initialState: any = this.modalService.config.initialState;
    this.successProofs = initialState.successProofs;
    this.failedProofs = initialState.failedproofs;
    this.missedProofs = initialState.missedProofs;
    this.isPOCcompleted = initialState.isPOCcompleted;

    // Extract the values from successProofs array
    for (const successProof of this.successProofs) {
      this.SProofName = successProof.ProofType;
      this.SBatch = successProof.Batch;
      this.SBatch2 = successProof.Batch2;
    }

    // Extract the values from failedproofs array
    for (const failedproof of this.failedProofs) {
      this.FProofName = failedproof.ProofType;
      this.FBatch = failedproof.Batch;
      this.FBatch2 = failedproof.Batch2;
    }

    // Extract the values from missedProof array
    for (const missedProof of this.missedProofs) {
      this.MProofName = missedProof.ProofType;
      this.MBatch = missedProof.Batch;
      this.MStage = missedProof.Stage;
      this.MBatch2 = missedProof.Batch2;
      this.MStage2 = missedProof.Stage2;
      this.TransactionType = missedProof.TransactionType;
    }
  }

  retryClick() {
    this.retry()
  }
}
