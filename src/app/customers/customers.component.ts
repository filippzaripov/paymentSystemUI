import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  editCustomer(customer): void {

    this.customerService.setter(customer);
    this.router.navigate(['/customer']);
    /*this.router.navigate(['/customer/' + id]);
    this.customerService.getCustomer(id);*/

  }

  createCustomer() {
    /*const customer = new Customer();
    this.customerService.setter(customer);
    this.router.navigate(['/customer']);*/
  }

  addName(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.customerService.saveCustomer({id: 100, firstName: name} as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  add(firstName: string, lastName: string, birthDate: string, address: string): void {
    if (!firstName && !lastName) {
      return;
    }
    this.customerService.saveCustomer({firstName: firstName, lastName: lastName, birthDate: birthDate, address: address} as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }
}
