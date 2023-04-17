import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeasurementsRegisterComponent } from './measurements-register.component';

describe('MeasurementsRegisterComponent', () => {
  let component: MeasurementsRegisterComponent;
  let fixture: ComponentFixture<MeasurementsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeasurementsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeasurementsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
