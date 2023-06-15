import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleRegisterCheckComponent } from './schedule-register-check.component';

describe('ScheduleRegisterCheckComponent', () => {
  let component: ScheduleRegisterCheckComponent;
  let fixture: ComponentFixture<ScheduleRegisterCheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleRegisterCheckComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScheduleRegisterCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
