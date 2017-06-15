import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesPhotoComponent } from './places-photo.component';

describe('PlacesPhotoComponent', () => {
  let component: PlacesPhotoComponent;
  let fixture: ComponentFixture<PlacesPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
