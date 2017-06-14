import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleEventsComponent } from './people-events.component';

describe('PeopleEventsComponent', () => {
  let component: PeopleEventsComponent;
  let fixture: ComponentFixture<PeopleEventsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleEventsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
