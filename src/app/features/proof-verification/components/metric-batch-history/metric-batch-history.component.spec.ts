import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricBatchHistoryComponent } from './metric-batch-history.component';

describe('MetricBatchHistoryComponent', () => {
  let component: MetricBatchHistoryComponent;
  let fixture: ComponentFixture<MetricBatchHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricBatchHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricBatchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
