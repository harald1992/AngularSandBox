import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernameAssignmentComponent } from './username-assignment.component';

describe('UsernameAssignmentComponent', () => {
  let component: UsernameAssignmentComponent;
  let fixture: ComponentFixture<UsernameAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernameAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernameAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
