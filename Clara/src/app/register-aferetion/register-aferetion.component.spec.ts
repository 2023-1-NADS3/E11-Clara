import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterAferetionComponent } from './register-aferetion.component';

describe('RegisterAferetionComponent', () => {
  let component: RegisterAferetionComponent;
  let fixture: ComponentFixture<RegisterAferetionComponent>;

  beforeEach(async () => {
    
    await TestBed.configureTestingModule({
      declarations: [ RegisterAferetionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterAferetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
