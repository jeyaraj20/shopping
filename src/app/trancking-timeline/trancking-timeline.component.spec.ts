import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TranckingTimelineComponent } from './trancking-timeline.component';

describe('TranckingTimelineComponent', () => {
  let component: TranckingTimelineComponent;
  let fixture: ComponentFixture<TranckingTimelineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TranckingTimelineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TranckingTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
