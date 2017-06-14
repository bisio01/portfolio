import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplePhotosComponent } from './people-photos.component';

describe('PeoplePhotosComponent', () => {
  let component: PeoplePhotosComponent;
  let fixture: ComponentFixture<PeoplePhotosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeoplePhotosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeoplePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
