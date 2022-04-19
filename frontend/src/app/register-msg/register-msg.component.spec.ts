import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterMsgComponent } from './register-msg.component';

describe('RegisterMsgComponent', () => {
  let component: RegisterMsgComponent;
  let fixture: ComponentFixture<RegisterMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
