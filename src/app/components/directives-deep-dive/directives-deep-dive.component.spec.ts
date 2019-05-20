import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesDeepDiveComponent } from './directives-deep-dive.component';

describe('DirectivesDeepDiveComponent', () => {
  let component: DirectivesDeepDiveComponent;
  let fixture: ComponentFixture<DirectivesDeepDiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectivesDeepDiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectivesDeepDiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
