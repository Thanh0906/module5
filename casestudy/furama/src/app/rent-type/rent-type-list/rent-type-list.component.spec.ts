import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTypeListComponent } from './rent-type-list.component';

describe('RentTypeListComponent', () => {
  let component: RentTypeListComponent;
  let fixture: ComponentFixture<RentTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
