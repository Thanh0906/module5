import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {

  customerForm = new FormGroup({
    id: new FormControl('',[Validators.required]),
    customerName: new FormControl('',[Validators.required]),
    customerBirthday :new FormControl(),
    gender: new FormControl('',[Validators.required]),
    idCard: new FormControl('',[Validators.required]),
    numberPhone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    address: new FormControl('',Validators.required),
    customerType: new FormControl('',Validators.required),
  })
  constructor() { }

  ngOnInit(): void {
  }
  get id() {
    return this.customerForm.get('id');
  }

  get name() {
    return this.customerForm.get('name');
  }

  get customerBirthday() {
    return this.customerForm.get('dateOfBirth');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get numberPhone() {
    return this.customerForm.get('phone');
  }

  get email() {
    return this.customerForm.get('email');
  }

  get address() {
    return this.customerForm.get('address');
  }

  get customerType() {
    return this.customerForm.get('customerType');
  }

  saveCustomer() {

  }
}
