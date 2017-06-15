import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPlaceComponent } from './events-place.component';

describe('EventsPlaceComponent', () => {
  let component: EventsPlaceComponent;
  let fixture: ComponentFixture<EventsPlaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPlaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPlaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
