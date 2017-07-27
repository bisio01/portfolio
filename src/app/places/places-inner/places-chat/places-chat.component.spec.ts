import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesChatComponent } from './places-chat.component';

describe('PlacesChatComponent', () => {
  let component: PlacesChatComponent;
  let fixture: ComponentFixture<PlacesChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
