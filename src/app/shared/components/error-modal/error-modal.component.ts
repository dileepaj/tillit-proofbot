import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { BsModalService, BsModalRef, ModalOptions } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-error-modal',
  templateUrl: './error-modal.component.html',
  styleUrls: ['./error-modal.component.css']
})
export class ErrorModalComponent implements OnInit {

  @Input()  retry : any;

  constructor(private modalService: BsModalService,public bsModalRef: BsModalRef) {}

  ngOnInit() {}

  retryClick(){
    this.retry()
  }
}
