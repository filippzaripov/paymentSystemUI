import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {CustomersComponent} from './customers/customers.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {PaymentsComponent} from './payments/payments.component';
import {BillersComponent} from './billers/billers.component';
import {BillerEditComponent} from './biller-edit/biller-edit.component';

const routes: Routes = [
  {path: '', redirectTo: '/payments', pathMatch: 'full'},
  {path: 'payments', component: PaymentsComponent},
  {path: 'customers', component: CustomersComponent},
  {path: 'customer/:id', component: CustomerEditComponent},
  {path: 'billers', component: BillersComponent},
  {path: 'biller/:id', component: BillerEditComponent}

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
