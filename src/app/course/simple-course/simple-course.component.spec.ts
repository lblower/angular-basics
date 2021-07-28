import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleCourseComponent } from './simple-course.component';

describe('SimpleCourseComponent', () => {
  let component: SimpleCourseComponent;
  let fixture: ComponentFixture<SimpleCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpleCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
