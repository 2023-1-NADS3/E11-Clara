import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRegisterComponent } from './image-register.component';

describe('ImageRegisterComponent', () => {
  let component: ImageRegisterComponent;
  let fixture: ComponentFixture<ImageRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageRegisterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
