import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveDumbCompComponent } from './directive-dumb-comp.component';

describe('DirectiveDumbCompComponent', () => {
  let component: DirectiveDumbCompComponent;
  let fixture: ComponentFixture<DirectiveDumbCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveDumbCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveDumbCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
