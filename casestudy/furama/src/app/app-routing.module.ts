import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  {
    path:'customer',
    loadChildren:()=>import('./customer/customer.module').then(module=>module.CustomerModule)
  },
  {
    path:'employee',
    loadChildren:()=>import('./employee/employee.module').then(module=>module.EmployeeModule)
  },
  {
    path:'service',
    loadChildren:()=>import('./service/service.module').then(module=>module.ServiceModule)
  },
  {
    path:'contract',
    loadChildren:()=>import('./contract/contract.module').then(module=>module.ContractModule)
  },
  {
    path:'contract-detail',
    loadChildren:()=>import('./contract-detail/contract-detail.module').then(module=>module.ContractDetailModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
