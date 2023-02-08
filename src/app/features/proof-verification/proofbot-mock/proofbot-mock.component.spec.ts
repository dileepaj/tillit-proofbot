import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProofbotMockComponent } from './proofbot-mock.component';

describe('ProofbotMockComponent', () => {
  let component: ProofbotMockComponent;
  let fixture: ComponentFixture<ProofbotMockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProofbotMockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProofbotMockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
