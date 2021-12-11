import {Component, OnInit} from '@angular/core';
import {CustomerType} from "../../modle/customer-type";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-customer-type-create',
  templateUrl: './customer-type-create.component.html',
  styleUrls: ['./customer-type-create.component.css']
})
export class CustomerTypeCreateComponent implements OnInit {
  customerTypeForm = new FormGroup({
    id: new FormControl('', [Validators.required]),
    name: new FormControl('', [Validators.required])
  })

  constructor() {
  }

  ngOnInit(): void {
  }

  saveCustomerType() {

  }
}
