import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDegreeCreateComponent } from './education-degree-create.component';

describe('EducationDegreeCreateComponent', () => {
  let component: EducationDegreeCreateComponent;
  let fixture: ComponentFixture<EducationDegreeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDegreeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDegreeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
