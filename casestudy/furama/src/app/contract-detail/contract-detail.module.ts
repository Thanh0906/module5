import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContractDetailRoutingModule } from './contract-detail-routing.module';
import {ContractDetailCreateComponent} from "./contract-detail-create/contract-detail-create.component";
import {ContractDetailDeleteComponent} from "./contract-detail-delete/contract-detail-delete.component";
import {ContractDetailEditComponent} from "./contract-detail-edit/contract-detail-edit.component";
import {ContractDetailListComponent} from "./contract-detail-list/contract-detail-list.component";


@NgModule({
  declarations: [
  ContractDetailCreateComponent,
    ContractDetailDeleteComponent,
    ContractDetailEditComponent,
    ContractDetailListComponent
  ],
  imports: [
    CommonModule,
    ContractDetailRoutingModule
  ]
})
export class ContractDetailModule { }
