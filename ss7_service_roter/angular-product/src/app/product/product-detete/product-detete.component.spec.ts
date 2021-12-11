import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDeteteComponent } from './product-detete.component';

describe('ProductDeteteComponent', () => {
  let component: ProductDeteteComponent;
  let fixture: ComponentFixture<ProductDeteteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDeteteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDeteteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
