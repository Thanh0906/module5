import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListStudentsComponent } from './list-students/list-students.component';
import {FormsModule} from "@angular/forms";
import { CustomerComponent } from './customer/customer.component';
import { HighLightDirective } from './high-light.directive';
import { TestCustomerDirectiveComponent } from './test-customer-directive/test-customer-directive.component';
import { AppNotDirective } from './app-not.directive';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestCustomPipeComponent } from './test-custom-pipe/test-custom-pipe.component';
import { TempConverterPipe } from './temp-converter.pipe';
import { ChildComponent } from './child/child.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
  declarations: [
    AppComponent,
    ListStudentsComponent,
    CustomerComponent,
    HighLightDirective,
    TestCustomerDirectiveComponent,
    AppNotDirective,
    TestPipeComponent,
    TestCustomPipeComponent,
    TempConverterPipe,
    ChildComponent,
    ProductPageComponent,
    StockStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
