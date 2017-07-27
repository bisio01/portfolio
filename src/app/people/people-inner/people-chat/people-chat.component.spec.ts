import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleChatComponent } from './people-chat.component';

describe('PeopleChatComponent', () => {
  let component: PeopleChatComponent;
  let fixture: ComponentFixture<PeopleChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
