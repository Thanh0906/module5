import {Component, OnInit} from '@angular/core';
import {Customer} from "../../modle/customer";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customerList: Customer[] = []

  constructor(private customerService: CustomerService) {
  }

  ngOnInit(): void {
     this.getAll();
  }

  getAll() {
    this.customerService.getAll().subscribe(customers => {
      this.customerList = customers;
    })
  }
}
