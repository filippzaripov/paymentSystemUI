import {Component, OnInit} from '@angular/core';
import {PaymentService} from '../payment.service';
import {CustomerService} from '../customer.service';
import {BillerService} from '../biller.service';
import {Biller} from '../biller';
import {Customer} from '../customer';

import {Payment} from '../payment';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  payments: Payment [];
  customers: Customer[];
  billers: Biller[];

  constructor(private route: ActivatedRoute,
              private paymentService: PaymentService,
              private customerService: CustomerService,
              private billerService: BillerService) {
  }

  ngOnInit() {
    this.getBillers();
    this.getCustomers();
    this.getPayments();
  }

  getPayments(): void {
    this.paymentService.getPayments()
      .subscribe(payments => this.payments = payments);
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  getBillers() {
    this.billerService.getBillers().subscribe(billers => this.billers = billers);
  }

  filterByCustomerId(id: number) {
    this.paymentService.getPaymentsFilteredByCustomer(id).subscribe(payments => this.payments = payments);
  }
  filterByBillerId(id: number) {
    this.paymentService.getPaymentsFilteredByBiller(id).subscribe(payments => this.payments = payments);
  }

}
