import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private router: Router) {
  }

  ngOnInit() {
  }

  toCustomers(): void {
    this.router.navigate(['/customers']);
  }

  add(firstName: string, lastName: string, birthDate: Date, address: string): void {
    if (!firstName || !lastName) {
      return;
    }
    this.customerService.saveCustomer(new Customer(firstName, lastName, birthDate, address))
      .subscribe(customer => this.customer = customer);

    this.toCustomers();
  }

}
