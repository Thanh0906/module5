import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DivisionRoutingModule } from './division-routing.module';
import {DivisionListComponent} from "./division-list/division-list.component";
import {DivisionCreateComponent} from "./division-create/division-create.component";
import {DivisionDeleteComponent} from "./division-delete/division-delete.component";
import {DivisionEditComponent} from "./division-edit/division-edit.component";


@NgModule({
  declarations: [
    DivisionListComponent,
    DivisionCreateComponent,
    DivisionDeleteComponent,
    DivisionEditComponent
  ],
  imports: [
    CommonModule,
    DivisionRoutingModule
  ]
})
export class DivisionModule { }
