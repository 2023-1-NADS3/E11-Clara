import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AferationComponent } from './aferation.component';

describe('AferationComponent', () => {
  let component: AferationComponent;
  let fixture: ComponentFixture<AferationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AferationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AferationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
