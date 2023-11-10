import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-metric-activity-view',
  templateUrl: './metric-activity-view.component.html',
  styleUrls: ['./metric-activity-view.component.css']
})
export class MetricActivityViewComponent implements OnInit {

  @Input() lang: string = "en";
  @Input() frameData: any = {};
  @Input() activity: any = {};

  constructor() { }

  ngOnInit() {
  }

}