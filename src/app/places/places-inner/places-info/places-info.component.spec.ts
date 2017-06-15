import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesInfoComponent } from './places-info.component';

describe('PlacesInfoComponent', () => {
  let component: PlacesInfoComponent;
  let fixture: ComponentFixture<PlacesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
