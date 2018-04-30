import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {PaymentsComponent} from './payments/payments.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomersComponent} from './customers/customers.component';
import {CustomerService} from './customer.service';
import {AppRoutingModule} from './app-routing.module';
import {BillerService} from './biller.service';
import {BillersComponent} from './billers/billers.component';
import {PaymentService} from './payment.service';
import {BillerEditComponent} from './biller-edit/biller-edit.component';
import {HttpClientModule} from '@angular/common/http';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';
import { BillerFormComponent } from './biller-form/biller-form.component';
import { PaymentFormComponent } from './payment-form/payment-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentsComponent,
    CustomerEditComponent,
    CustomersComponent,
    BillersComponent,
    BillerEditComponent,
    CustomerCreateComponent,
    CustomerFormComponent,
    BillerFormComponent,
    PaymentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false})*/
  ],
  providers: [CustomerService, BillerService, PaymentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
