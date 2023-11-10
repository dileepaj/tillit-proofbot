import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricActivityViewComponent } from './metric-activity-view.component';

describe('MetricActivityViewComponent', () => {
  let component: MetricActivityViewComponent;
  let fixture: ComponentFixture<MetricActivityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricActivityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricActivityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});