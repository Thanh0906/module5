import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerTypeDeleteComponent } from './customer-type-delete.component';

describe('CustomerTypeDeleteComponent', () => {
  let component: CustomerTypeDeleteComponent;
  let fixture: ComponentFixture<CustomerTypeDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerTypeDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerTypeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
