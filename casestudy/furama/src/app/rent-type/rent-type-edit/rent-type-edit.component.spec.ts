import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTypeEditComponent } from './rent-type-edit.component';

describe('RentTypeEditComponent', () => {
  let component: RentTypeEditComponent;
  let fixture: ComponentFixture<RentTypeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTypeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTypeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
