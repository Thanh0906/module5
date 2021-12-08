import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationDegreeListComponent } from './education-degree-list.component';

describe('EducationDegreeListComponent', () => {
  let component: EducationDegreeListComponent;
  let fixture: ComponentFixture<EducationDegreeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationDegreeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationDegreeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
