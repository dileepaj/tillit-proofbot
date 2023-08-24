import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-bot-segments",
  templateUrl: "./bot-segments.component.html",
  styleUrls: ["./bot-segments.component.css"]
})
export class BotSegmentsComponent implements OnInit {
  @Input() SegmentNumber: number;
  @Input() icon: string;
  @Input() steppers: any[];
  @Input() subSteppers: any[];
  @Output() backToStepFn = new EventEmitter();
  @Output() backToActionFn = new EventEmitter();
  @Input() lang: string = "en";
  @Input() proofType: string;

  constructor() {}

  ngOnInit() {
    // Get a reference to the element
    const element1 = document.getElementById('step-circle');
    const element2 = document.getElementById('substep-circle');
    // Set the element's width to max-content
    // this.setWidthToHeight(element1);
    // this.setWidthToHeight(element2);
    
  }
  
  emitBackToStepFn(NO: number) {
    if (this.proofType != 'poc') {
      this.backToStepFn.emit(NO);
    }
  }
  
  emitBackToActionFn(NO: number) {
    this.backToActionFn.emit(NO);
  }

  setWidthToHeight(element: HTMLElement | null) {
    if (element) {
        element.style.width = 'max-content';

        // Retrieve the computed width
        const computedWidth = window.getComputedStyle(element).width;

        // Assign the computed width to the element's height
        element.style.height = computedWidth;
    }
}
}
