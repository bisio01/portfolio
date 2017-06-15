import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsPhotoComponent } from './events-photo.component';

describe('EventsPhotoComponent', () => {
  let component: EventsPhotoComponent;
  let fixture: ComponentFixture<EventsPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventsPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
