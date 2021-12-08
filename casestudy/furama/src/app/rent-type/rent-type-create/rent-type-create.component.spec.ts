import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentTypeCreateComponent } from './rent-type-create.component';

describe('RentTypeCreateComponent', () => {
  let component: RentTypeCreateComponent;
  let fixture: ComponentFixture<RentTypeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentTypeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentTypeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
