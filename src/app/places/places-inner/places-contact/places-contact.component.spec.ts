import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesContactComponent } from './places-contact.component';

describe('PlacesContactComponent', () => {
  let component: PlacesContactComponent;
  let fixture: ComponentFixture<PlacesContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
