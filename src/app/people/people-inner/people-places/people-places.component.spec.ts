import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePlacesComponent } from './people-places.component';

describe('PeoplePlacesComponent', () => {
  let component: PeoplePlacesComponent;
  let fixture: ComponentFixture<PeoplePlacesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePlacesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
