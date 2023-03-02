import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  @Input() retry: any;
  title: string;
  errorTitle: string;
  m1: string;
  m2: string;

  constructor(private modalService: BsModalService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
    let initialState: any = this.modalService.config.initialState
    console.log('initialState', initialState)
    this.title = initialState.title
    this.errorTitle = initialState.title
    this.m1 = initialState.title
    this.m2 = initialState.m2

  }

  retryClick() {
    this.retry()
  }
}
