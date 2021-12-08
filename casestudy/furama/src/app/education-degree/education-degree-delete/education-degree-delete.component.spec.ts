import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDegreeDeleteComponent } from './education-degree-delete.component';

describe('EducationDegreeDeleteComponent', () => {
  let component: EducationDegreeDeleteComponent;
  let fixture: ComponentFixture<EducationDegreeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDegreeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDegreeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
