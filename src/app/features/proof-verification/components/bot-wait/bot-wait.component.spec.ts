import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotWaitComponent } from './bot-wait.component';

describe('BotWaitComponent', () => {
  let component: BotWaitComponent;
  let fixture: ComponentFixture<BotWaitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotWaitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotWaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
