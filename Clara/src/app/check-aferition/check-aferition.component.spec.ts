import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAferitionComponent } from './check-aferition.component';

describe('CheckAferitionComponent', () => {
  let component: CheckAferitionComponent;
  let fixture: ComponentFixture<CheckAferitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAferitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAferitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
