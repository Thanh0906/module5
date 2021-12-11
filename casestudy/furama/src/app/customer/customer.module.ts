import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CustomerRoutingModule} from './customer-routing.module';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerCreateComponent} from "./customer-create/customer-create.component";
import {CustomerDeleteComponent} from "./customer-delete/customer-delete.component";
import {CustomerEditComponent} from "./customer-edit/customer-edit.component";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {CustomerService} from "../services/customer.service";

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerCreateComponent,
    CustomerDeleteComponent,
    CustomerEditComponent],
  providers:[
    CustomerService
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class CustomerModule {
}
