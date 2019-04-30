import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingDeepdiveAssignmentComponent } from './databinding-deepdive-assignment.component';

describe('DatabindingDeepdiveAssignmentComponent', () => {
  let component: DatabindingDeepdiveAssignmentComponent;
  let fixture: ComponentFixture<DatabindingDeepdiveAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatabindingDeepdiveAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingDeepdiveAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
