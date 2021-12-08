import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTypeDeleteComponent } from './rent-type-delete.component';

describe('RentTypeDeleteComponent', () => {
  let component: RentTypeDeleteComponent;
  let fixture: ComponentFixture<RentTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
