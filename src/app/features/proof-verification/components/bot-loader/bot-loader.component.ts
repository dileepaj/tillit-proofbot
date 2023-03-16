import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-bot-loader',
  templateUrl: './bot-loader.component.html',
  styleUrls: ['./bot-loader.component.css']
})
export class BotLoaderComponent implements OnInit {

  @Input() isStartDemo: Boolean;
  @Input() initialHeight: string;
  @Input() initialWidth: string;
  @Input() isLoading: string;
  @Input() color: string;
  @Input() mode: string;
  @Input() value: string;
  @Output() startDemoFn = new EventEmitter();
  @Input() LoadingProofType: string;
  @Input() TXNhash: string;
  @Input() product
  @Input() batch
  @Input() tdpId
  countdown: number = 3;

  constructor() { }

  ngOnInit() {
    this.startDemoFn.emit('');
   // start the countdown
    setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
      }
    }, 1000);
  }
  
  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('changes', changes)
  //   if (changes.product){
  //     this.product = changes.product.currentValue
  //   }
  //   if (changes.batch){
  //     this.batch = changes.batch.currentValue
  //   }
  //   if (changes.tdpId){
  //     this.tdpId = changes.tdpId.currentValue
  //   }
  // }

}
