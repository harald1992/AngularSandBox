import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeStuffAttributeComponent } from './practice-stuff-attribute.component';

describe('PracticeStuffAttributeComponent', () => {
  let component: PracticeStuffAttributeComponent;
  let fixture: ComponentFixture<PracticeStuffAttributeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PracticeStuffAttributeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeStuffAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
