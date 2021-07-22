import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingCodeComponent } from './binding-code.component';

describe('BindingCodeComponent', () => {
  let component: BindingCodeComponent;
  let fixture: ComponentFixture<BindingCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
