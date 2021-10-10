import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WomenShoppingComponent } from './women-shopping.component';

describe('WomenShoppingComponent', () => {
  let component: WomenShoppingComponent;
  let fixture: ComponentFixture<WomenShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WomenShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WomenShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
