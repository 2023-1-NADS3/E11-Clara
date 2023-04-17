import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthRegisterComponent } from './health-register.component';

describe('HealthRegisterComponent', () => {
  let component: HealthRegisterComponent;
  let fixture: ComponentFixture<HealthRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HealthRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
