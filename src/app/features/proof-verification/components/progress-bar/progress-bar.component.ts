import { Component, Input, OnInit, EventEmitter, Output } from "@angular/core";
import { CommonService } from "src/app/services/common.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  @Input() isPause: Boolean;
  @Input() isPlayCompleted: Boolean;
  @Input() currentStep: number;
  @Input() totalSteps: number;
  @Input() playbackSpeed: number;
  @Input() isTheater: Boolean;
  @Input() vsHeightExpand: Boolean;
  @Output() setLangFn = new EventEmitter();
  @Output() togglePlayPauseFn = new EventEmitter();
  @Output() stopFn = new EventEmitter();
  @Output() replayFn = new EventEmitter();
  @Output() setSpeedFn = new EventEmitter();
  @Output() theaterModeFn = new EventEmitter();
  @Output() resizeVerifyScreenFn = new EventEmitter();
  @Output() POCStatus = new EventEmitter();
  @Input() isStartDemo: Boolean;


  constructor(public commonServices: CommonService) { }

  ngOnInit() { }

  emitLangFn(lang: string) {
    this.setLangFn.emit(lang);
  }

  emitTogglePlayPauseFn() {
    this.togglePlayPauseFn.emit("");
  }

  emitStopFn() {
    this.stopFn.emit("");
  }

  emitReplayFn() {
    this.replayFn.emit("");
  }

  emitSetSpeedFn(speed: number) {
    this.setSpeedFn.emit(speed);
  }

  emitTheaterModeFn() {
    this.theaterModeFn.emit("");
  }

  emitResizeVerifyScreenFn() {
    this.resizeVerifyScreenFn.emit("");
  }

  emitPOCStatusFn(){
    this.POCStatus.emit("");
  }
}

