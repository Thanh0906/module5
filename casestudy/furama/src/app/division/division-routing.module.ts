import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DivisionListComponent} from "./division-list/division-list.component";


const routes: Routes = [
  {
    path :'',
    component: DivisionListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DivisionRoutingModule { }
