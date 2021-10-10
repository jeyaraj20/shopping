import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodayOffComponent } from './today-off.component';

describe('TodayOffComponent', () => {
  let component: TodayOffComponent;
  let fixture: ComponentFixture<TodayOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodayOffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodayOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
