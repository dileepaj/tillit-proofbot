import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { POCStatus } from './poc-status.component';

describe('POCStaus', () => {
  let component: POCStatus;
  let fixture: ComponentFixture<POCStatus>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ POCStatus ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(POCStatus);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});