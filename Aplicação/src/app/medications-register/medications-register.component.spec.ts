import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicationsRegisterComponent } from './medications-register.component';

describe('MedicationsRegisterComponent', () => {
  let component: MedicationsRegisterComponent;
  let fixture: ComponentFixture<MedicationsRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicationsRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicationsRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
