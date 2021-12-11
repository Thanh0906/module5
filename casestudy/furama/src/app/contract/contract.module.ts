import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractRoutingModule } from './contract-routing.module';
import {ContractDeleteComponent} from "./contract-delete/contract-delete.component";
import {ContractListComponent} from "./contract-list/contract-list.component";
import {ContractCreateComponent} from "./contract-create/contract-create.component";
import {ContractEditComponent} from "./contract-edit/contract-edit.component";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ContractDeleteComponent,
    ContractListComponent,
    ContractCreateComponent,
    ContractEditComponent
  ],
  imports: [
    CommonModule,
    ContractRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContractModule { }
