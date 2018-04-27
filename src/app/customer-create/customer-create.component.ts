import {Component, OnInit, Output} from '@angular/core';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
@Output() customer: Customer;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  save() {
    this.customerService.saveCustomer(this.customer);
  }
}
