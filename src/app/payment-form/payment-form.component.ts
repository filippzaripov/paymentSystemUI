import {Component, OnInit, Input} from '@angular/core';
import {CustomerService} from '../customer.service';
import {BillerService} from '../biller.service';
import {PaymentService} from '../payment.service';
import {Biller} from "../biller";
import {Customer} from "../customer";
import {Payment} from "../payment";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.css']
})
export class PaymentFormComponent implements OnInit {
  @Input() payment: Payment;
  @Input() private customers: Customer[];
  @Input() private billers: Biller[];
  showElement: boolean;
  selectedCustomer: Customer;
  printedCustomerName: string;
  selectedBiller: Biller;
  account: string;
  amount: number;

  constructor(private customerService: CustomerService,
              private route: ActivatedRoute,
              private billerService: BillerService,
              private paymentService: PaymentService,
              private router: Router) {
  }

  print() {
    this.printedCustomerName = this.selectedCustomer.firstName;
  }

  ngOnInit() {
    this.getBillers();
    this.getCustomers();
  }

  toPayments() {
    this.router.navigate(['/payments']);
  }

  getCustomers() {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  getBillers() {
    this.billerService.getBillers().subscribe(billers => this.billers = billers);
  }

  add(): void {

    if (!this.selectedCustomer || !this.selectedBiller || !this.account || !this.amount) {
      this.showElement = true;
     return;
     }
    this.payment = new Payment(this.selectedCustomer, this.selectedBiller, this.account, this.amount);
    this.paymentService.savePayment(this.payment, this.selectedCustomer.id, this.selectedBiller.id)
      .subscribe();
     this.toPayments();
  }

}
