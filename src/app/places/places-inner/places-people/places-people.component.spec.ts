import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPeopleComponent } from './places-people.component';

describe('PlacesPeopleComponent', () => {
  let component: PlacesPeopleComponent;
  let fixture: ComponentFixture<PlacesPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
