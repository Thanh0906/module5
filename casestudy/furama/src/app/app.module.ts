import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { ContratCreateComponent } from './contract/contrat-create/contrat-create.component';
import { ServiceCreateComponent } from './service/service-create/service-create.component';
import { ContractDetailCreateComponent } from './contractDetail/contract-detail-create/contract-detail-create.component';
import { HomeComponent } from './home/home/home.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { FooterComponent } from './home/footer/footer.component';
import { BodyComponent } from './home/body/body.component';
import { ServiceEditComponent } from './service/service-edit/service-edit.component';
import { ServiceDeleteComponent } from './service/service-delete/service-delete.component';
import { ServiceListComponent } from './service/service-list/service-list.component';
import { EmployeeEditComponent } from './employee/employee-edit/employee-edit.component';
import { EmployeeDeleteComponent } from './employee/employee-delete/employee-delete.component';
import { CustomerDeleteComponent } from './customer/customer-delete/customer-delete.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import { CustomerTypeCreateComponent } from './customer-type/customer-type-create/customer-type-create.component';
import { CustomerTypeDeleteComponent } from './customer-type/customer-type-delete/customer-type-delete.component';
import { CustomerTypeListComponent } from './customer-type/customer-type-list/customer-type-list.component';
import { CustomerTypeEditComponent } from './customer-type/customer-type-edit/customer-type-edit.component';
import { DivisionListComponent } from './division/division-list/division-list.component';
import { DivisionCreateComponent } from './division/division-create/division-create.component';
import { DivisionDeleteComponent } from './division/division-delete/division-delete.component';
import { DivisionEditComponent } from './division/division-edit/division-edit.component';
import { PositionListComponent } from './position/position-list/position-list.component';
import { PositionEditComponent } from './position/position-edit/position-edit.component';
import { PositionCreateComponent } from './position/position-create/position-create.component';
import { PositionDeleteComponent } from './position/position-delete/position-delete.component';
import { RentTypeCreateComponent } from './rent-type/rent-type-create/rent-type-create.component';
import { RentTypeEditComponent } from './rent-type/rent-type-edit/rent-type-edit.component';
import { RentTypeDeleteComponent } from './rent-type/rent-type-delete/rent-type-delete.component';
import { RentTypeListComponent } from './rent-type/rent-type-list/rent-type-list.component';
import { EducationDegreeCreateComponent } from './education-degree/education-degree-create/education-degree-create.component';
import { EducationDegreeListComponent } from './education-degree/education-degree-list/education-degree-list.component';
import { EducationDegreeEditComponent } from './education-degree/education-degree-edit/education-degree-edit.component';
import { EducationDegreeDeleteComponent } from './education-degree/education-degree-delete/education-degree-delete.component';
import { ContractDetailListComponent } from './contractDetail/contract-detail-list/contract-detail-list.component';
import { ContractDetailEditComponent } from './contractDetail/contract-detail-edit/contract-detail-edit.component';
import { ContractDetailDeleteComponent } from './contractDetail/contract-detail-delete/contract-detail-delete.component';
import { ContractDeleteComponent } from './contract/contract-delete/contract-delete.component';
import { ContractEditComponent } from './contract/contract-edit/contract-edit.component';
import { ContractListComponent } from './contract/contract-list/contract-list.component';
import { ContractCreateComponent } from './contract/contract-create/contract-create.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CustomerCreateComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    ContratCreateComponent,
    ServiceCreateComponent,
    ContractDetailCreateComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    BodyComponent,
    ServiceEditComponent,
    ServiceDeleteComponent,
    ServiceListComponent,
    EmployeeEditComponent,
    EmployeeDeleteComponent,
    CustomerDeleteComponent,
    CustomerEditComponent,
    CustomerTypeCreateComponent,
    CustomerTypeDeleteComponent,
    CustomerTypeListComponent,
    CustomerTypeEditComponent,
    DivisionListComponent,
    DivisionCreateComponent,
    DivisionDeleteComponent,
    DivisionEditComponent,
    PositionListComponent,
    PositionEditComponent,
    PositionCreateComponent,
    PositionDeleteComponent,
    RentTypeCreateComponent,
    RentTypeEditComponent,
    RentTypeDeleteComponent,
    RentTypeListComponent,
    EducationDegreeCreateComponent,
    EducationDegreeListComponent,
    EducationDegreeEditComponent,
    EducationDegreeDeleteComponent,
    ContractDetailListComponent,
    ContractDetailEditComponent,
    ContractDetailDeleteComponent,
    ContractDeleteComponent,
    ContractEditComponent,
    ContractListComponent,
    ContractCreateComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
