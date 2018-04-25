import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Customer} from './customer';
import {CUSTOMERS} from './mock-customers';
import {of} from 'rxjs/observable/of';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8080/customers';
  constructor(private http: HttpClient,) {
  }

  getCustomers(): Observable<Customer[]> {
    /*return of(CUSTOMERS);*/
    return this.http.get<Customer[]>(this.customersUrl);
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
    /*return of(CUSTOMERS.find(customer => customer.id === id));*/
  }

  updateCustomer (customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions);
  }
}
