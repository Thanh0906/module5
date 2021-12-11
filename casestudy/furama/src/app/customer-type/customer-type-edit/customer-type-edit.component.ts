import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomerTypeService} from "../../services/customer-type.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-customer-type-edit',
  templateUrl: './customer-type-edit.component.html',
  styleUrls: ['./customer-type-edit.component.css']
})
export class CustomerTypeEditComponent implements OnInit {

  customerTypeForm = new FormGroup({
    name: new FormControl()
  });

  constructor(private customerTypeService: CustomerTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
  }

  saveCustomerType() {
    const customerType = this.customerTypeForm.value;
    this.customerTypeService.save(customerType).subscribe(() => {
      this.router.navigate(['/customer-type/list']);
    }, error => {
      console.log(error);
    });
  }

}
