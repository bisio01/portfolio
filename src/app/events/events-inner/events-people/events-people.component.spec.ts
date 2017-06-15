import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPeopleComponent } from './events-people.component';

describe('EventsPeopleComponent', () => {
  let component: EventsPeopleComponent;
  let fixture: ComponentFixture<EventsPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
