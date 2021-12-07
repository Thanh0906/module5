import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { CustomerListComponent } from './customer/customer-list/customer-list.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { ContratCreateComponent } from './contract/contrat-create/contrat-create.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ContractDetailCreateComponent } from './contractDetail/contract-detail-create/contract-detail-create.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    EmployeeDeleteComponent,
    EmployeeEditComponent,
    CustomerListComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    ContratCreateComponent,
    ServiceCreateComponent,
    ContractDetailCreateComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
