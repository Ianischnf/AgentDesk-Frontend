import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BundleNumberComponent } from './bundle-number-component';

describe('BundleNumberComponent', () => {
  let component: BundleNumberComponent;
  let fixture: ComponentFixture<BundleNumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BundleNumberComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BundleNumberComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
