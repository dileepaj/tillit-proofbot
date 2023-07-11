import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  @Input() retry: any;
  @Output() backToStepFn = new EventEmitter();
  @Input() steppers: any[];
  title: string;
  errorTitle: string;
  m1: Number = 0;
  m2: string;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    let initialState: any = this.modalService.config.initialState;
    
    this.title = initialState.title;
    this.errorTitle = initialState.errorTitle;
    this.m1 = initialState.m1;
    this.m2 = initialState.m2;
  }
  
  emitBackToStepFn(NO: number) {
    this.backToStepFn.emit(NO);
  
  }

  retryClick() {
    this.retry()
  }
}
