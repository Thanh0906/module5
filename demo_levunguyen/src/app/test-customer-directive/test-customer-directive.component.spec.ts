import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCustomerDirectiveComponent } from './test-customer-directive.component';

describe('TestCustomerDirectiveComponent', () => {
  let component: TestCustomerDirectiveComponent;
  let fixture: ComponentFixture<TestCustomerDirectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCustomerDirectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCustomerDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
