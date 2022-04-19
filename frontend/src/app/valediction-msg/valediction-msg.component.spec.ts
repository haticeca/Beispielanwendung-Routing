import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValedictionMsgComponent } from './valediction-msg.component';

describe('ValedictionMsgComponent', () => {
  let component: ValedictionMsgComponent;
  let fixture: ComponentFixture<ValedictionMsgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValedictionMsgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValedictionMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
