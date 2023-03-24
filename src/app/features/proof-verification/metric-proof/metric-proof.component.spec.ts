import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetricProofComponent } from './metric-proof.component';

describe('MetricProofComponent', () => {
  let component: MetricProofComponent;
  let fixture: ComponentFixture<MetricProofComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetricProofComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetricProofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
