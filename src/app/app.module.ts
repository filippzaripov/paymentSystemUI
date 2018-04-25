import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PaymentsComponent } from './payments/payments.component';
import { CustomerEditComponent } from './customer-edit/customer-edit.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerService } from './customer.service';
import { AppRoutingModule } from './/app-routing.module';
import { BillerService } from './biller.service';
import { BillersComponent } from './billers/billers.component';
import { PaymentService } from './payment.service';
import { BillerEditComponent } from './biller-edit/biller-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    CustomerEditComponent,
    CustomersComponent,
    BillersComponent,
    BillerEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CustomerService, BillerService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
