import {Component, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
  customers: Customer[];

  constructor(private customerService: CustomerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService.getCustomers().subscribe(customers => this.customers = customers);
  }

  editCustomer(id: string): void {
    this.router.navigate([`/customer/${id}`]);
  }


  /*addName(name: string): void {
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
    this.customerService.saveCustomer({
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      address: address
    } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }*/

  delete(customer: Customer): void {
    this.customers = this.customers.filter(function (cu) {
      return cu !== customer;
    });
    this.customerService.deleteCustomer(customer).subscribe();
  }

}
