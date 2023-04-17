import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucessSingnupComponent } from './sucess-singnup.component';

describe('SucessSingnupComponent', () => {
  let component: SucessSingnupComponent;
  let fixture: ComponentFixture<SucessSingnupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SucessSingnupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SucessSingnupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
