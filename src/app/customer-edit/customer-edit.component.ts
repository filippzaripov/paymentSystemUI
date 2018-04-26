import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  @Input() customer: Customer;

  constructor(private route: ActivatedRoute,
              private customerService: CustomerService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.customerService.getCustomer(id)
      .subscribe(customer => this.customer = customer);
  }

  toCustomers(): void {
    this.router.navigate(['/customers']);
  }

  save(): void {
    this.customerService.updateHero(this.customer)
      .subscribe(() => this.toCustomers());
  }
}
