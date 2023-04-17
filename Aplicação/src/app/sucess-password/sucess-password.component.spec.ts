import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessPasswordComponent } from './sucess-password.component';

describe('SucessPasswordComponent', () => {
  let component: SucessPasswordComponent;
  let fixture: ComponentFixture<SucessPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessPasswordComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
