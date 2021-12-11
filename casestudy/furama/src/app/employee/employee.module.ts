import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import {EmployeeCreateComponent} from "./employee-create/employee-create.component";
import {EmployeeListComponent} from "./employee-list/employee-list.component";
import {EmployeeDeleteComponent} from "./employee-delete/employee-delete.component";
import {EmployeeEditComponent} from "./employee-edit/employee-edit.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
