import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUpdateOrderComponent } from './form-update-order-component';

describe('FormUpdateOrderComponent', () => {
  let component: FormUpdateOrderComponent;
  let fixture: ComponentFixture<FormUpdateOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormUpdateOrderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormUpdateOrderComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
