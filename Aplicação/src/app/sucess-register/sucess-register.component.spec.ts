import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessRegisterComponent } from './sucess-register.component';

describe('SucessRegisterComponent', () => {
  let component: SucessRegisterComponent;
  let fixture: ComponentFixture<SucessRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
