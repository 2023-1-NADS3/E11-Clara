import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRegisterSucessComponent } from './schedule-register-sucess.component';

describe('ScheduleRegisterSucessComponent', () => {
  let component: ScheduleRegisterSucessComponent;
  let fixture: ComponentFixture<ScheduleRegisterSucessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleRegisterSucessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleRegisterSucessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
