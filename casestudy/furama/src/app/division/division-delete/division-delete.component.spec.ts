import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DivisionDeleteComponent } from './division-delete.component';

describe('DivisionDeleteComponent', () => {
  let component: DivisionDeleteComponent;
  let fixture: ComponentFixture<DivisionDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DivisionDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DivisionDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
