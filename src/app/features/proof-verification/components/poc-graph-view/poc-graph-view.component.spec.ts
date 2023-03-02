import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PocGraphViewComponent } from './poc-graph-view.component';

describe('PocGraphViewComponent', () => {
  let component: PocGraphViewComponent;
  let fixture: ComponentFixture<PocGraphViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PocGraphViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PocGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
