import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDegreeEditComponent } from './education-degree-edit.component';

describe('EducationDegreeEditComponent', () => {
  let component: EducationDegreeEditComponent;
  let fixture: ComponentFixture<EducationDegreeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDegreeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDegreeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
