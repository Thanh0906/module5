import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../../modle/employee";
import {Customer} from "../../modle/customer";
import {Services} from "../../modle/services";
import {ContractService} from "../../services/contract.service";
import {EmployeeService} from "../../services/employee.service";
import {ServicesService} from "../../services/services.service";
import {CustomerService} from "../../services/customer.service";

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {

  contractForm = new FormGroup({
    startDate: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    endDate: new FormControl('', [Validators.required, Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    deposit: new FormControl(''),
    totalMoney: new FormControl(''),
    employee: new FormControl('', [Validators.required]),
    customer: new FormControl('', [Validators.required]),
    services: new FormControl('', [Validators.required])
  });

  employeeList: Employee[] = [];
  customerList: Customer[] = [];
  servicesList: Services[] = [];
  constructor(private contractService: ContractService,
              private employeeService: EmployeeService,
              private servicesService: ServicesService,
              private customerService: CustomerService) {
  }
  ngOnInit(): void {
  }

  saveContract() {

  }
}
