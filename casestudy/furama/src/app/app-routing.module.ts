import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerListComponent} from "./customer/customer-list/customer-list.component";
import {CustomerCreateComponent} from "./customer/customer-create/customer-create.component";
import {EmployeeListComponent} from "./employee/employee-list/employee-list.component";
import {EmployeeCreateComponent} from "./employee/employee-create/employee-create.component";



const routes: Routes = [
  {path :'customerList', component: CustomerListComponent},
  {path : 'customerCreate',component: CustomerCreateComponent},
  {path :'employeeList',component: EmployeeListComponent},
  {path : 'employeeCreate',component: EmployeeCreateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
