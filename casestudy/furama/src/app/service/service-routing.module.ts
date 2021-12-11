import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ServiceListComponent} from "./service-list/service-list.component";
import {ServiceCreateComponent} from "./service-create/service-create.component";
import {ServiceEditComponent} from "./service-edit/service-edit.component";
import {ServiceDeleteComponent} from "./service-delete/service-delete.component";


const routes: Routes = [
  {
    path:'',
    component: ServiceListComponent
  },
  {
    path:'create',
    component: ServiceCreateComponent
  },{
  path:'edit/:id',
    component: ServiceEditComponent
  },
  {
    path:'delete/:id',
    component: ServiceDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
