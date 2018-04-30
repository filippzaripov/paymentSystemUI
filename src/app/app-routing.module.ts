import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {PaymentsComponent} from './payments/payments.component';
import {BillersComponent} from './billers/billers.component';
import {BillerEditComponent} from './biller-edit/biller-edit.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerFormComponent} from './customer-form/customer-form.component';
import {BillerFormComponent} from './biller-form/biller-form.component';
import {PaymentFormComponent} from './payment-form/payment-form.component';

const routes: Routes = [
  {path: '', redirectTo: '/payments', pathMatch: 'full'},
  {path: 'payments', component: PaymentsComponent},
  {path: 'payments/:filteredByCustomer', component: PaymentsComponent},
  {path: 'payments/:filteredByBiller', component: PaymentsComponent},
  {path: 'payment', component: PaymentFormComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer', component: CustomerFormComponent},
  {path: 'customer/:id', component: CustomerFormComponent},
  {path: 'billers', component: BillersComponent},
  {path: 'biller/:id', component: BillerFormComponent},
  {path: 'biller', component: BillerFormComponent}

]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
