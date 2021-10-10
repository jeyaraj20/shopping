import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaederSectionComponent } from './haeder-section.component';

describe('HaederSectionComponent', () => {
  let component: HaederSectionComponent;
  let fixture: ComponentFixture<HaederSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaederSectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaederSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
