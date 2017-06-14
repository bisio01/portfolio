import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleFriendsComponent } from './people-friends.component';

describe('PeopleFriendsComponent', () => {
  let component: PeopleFriendsComponent;
  let fixture: ComponentFixture<PeopleFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
