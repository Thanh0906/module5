import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceDeleteComponent} from "./service-delete/service-delete.component";
import {ServiceEditComponent} from "./service-edit/service-edit.component";
import {ServiceCreateComponent} from "./service-create/service-create.component";


@NgModule({
  declarations: [
    ServiceListComponent,
    ServiceDeleteComponent,
    ServiceEditComponent,
    ServiceCreateComponent
  ],
  imports: [
    CommonModule,
    ServiceRoutingModule
  ]
})
export class ServiceModule { }
