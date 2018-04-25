import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Customer} from './customer';
import {CUSTOMERS} from './mock-customers';
import {of} from 'rxjs/observable/of';

@Injectable()
export class CustomerService {
  constructor() {
  }

  getCustomers(): Observable<Customer[]> {
    return of(CUSTOMERS);
  }

  getCustomer(id: number): Observable<Customer> {
    return of(CUSTOMERS.find(customer => customer.id === id));
  }

}
