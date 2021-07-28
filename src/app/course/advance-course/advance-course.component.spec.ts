import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceCourseComponent } from './advance-course.component';

describe('AdvanceCourseComponent', () => {
  let component: AdvanceCourseComponent;
  let fixture: ComponentFixture<AdvanceCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceCourseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
