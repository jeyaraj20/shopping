import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManShoppingComponent } from './man-shopping.component';

describe('ManShoppingComponent', () => {
  let component: ManShoppingComponent;
  let fixture: ComponentFixture<ManShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
