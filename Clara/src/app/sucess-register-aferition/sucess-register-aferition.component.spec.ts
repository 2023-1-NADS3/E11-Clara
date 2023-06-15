import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRegisterAferitionComponent } from './sucess-register-aferition.component';

describe('SucessRegisterAferitionComponent', () => {
  let component: SucessRegisterAferitionComponent;
  let fixture: ComponentFixture<SucessRegisterAferitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessRegisterAferitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessRegisterAferitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
