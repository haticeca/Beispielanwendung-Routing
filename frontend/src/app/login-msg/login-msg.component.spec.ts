import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginMsgComponent } from './login-msg.component';

describe('LoginMsgComponent', () => {
  let component: LoginMsgComponent;
  let fixture: ComponentFixture<LoginMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
