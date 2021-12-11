import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CustomerService} from "../../services/customer.service";
import {CustomerTypeService} from "../../services/customer-type.service";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {CustomerType} from "../../modle/customer-type";

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {

  customerForm = new FormGroup({
    // id: new FormControl(''),
    customerCode: new FormControl('', [Validators.required, Validators.pattern('(KH-)(\\\\d{4})$')]),
    customerName: new FormControl('', [Validators.required]),
    customerBirthday: new FormControl('', [Validators.required,
        Validators.pattern('^(?:19\\d{2}|20\\d{2})[-/.](?:0[1-9]|1[012])[-/.](?:0[1-9]|[12][0-9]|3[01])$')]),
    gender: new FormControl('', [Validators.required]),
    idCard: new FormControl('', [Validators.required,
      Validators.pattern('^([0-9]{9})|([0-9]{12})$')]),
    numberPhone: new FormControl('', [Validators.required,
      Validators.pattern('^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$')]),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', Validators.required),
    customerType: new FormControl('', Validators.required),
  })

  id: string;
  customerTypeList: CustomerType[] = [];

  constructor(private customerService: CustomerService,
              private customerTypeService: CustomerTypeService
              ) {
    this.getCustomer(this.id);
  }

  ngOnInit(): void {
    this.getAllCustomerType()
  }
  updateCustomer(id: string) {
    const customer = this.customerForm.value;
    this.customerService.update(id, customer).subscribe(() => {
    }, error => {
      console.log(error);
    });
  }
  getCustomer(id: string) {
    return this.customerService.findById(id).subscribe(customers => {
      this.customerForm = new FormGroup({})
    })
  }
  getAllCustomerType(){
    this.customerTypeService.getAll().subscribe(customerTypes => {
      this.customerTypeList = customerTypes;
    });
  }
  get customerCode() {
    return this.customerForm.get('customerCode');
  }
  get customerName() {
    return this.customerForm.get('customerName');
  }

  get customerBirthday() {
    return this.customerForm.get('customerBirthday');
  }

  get gender() {
    return this.customerForm.get('gender');
  }

  get idCard() {
    return this.customerForm.get('idCard');
  }

  get numberPhone() {
    return this.customerForm.get('numberPhone');
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
}
