import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Customer} from './customer';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class CustomerService {
  private customersUrl = 'http://localhost:8080/customers';

  // private customer = new Customer();

  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    /*return of(CUSTOMERS);*/
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      catchError(this.handleError('getCustomers', []))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
    /*return of(CUSTOMERS.find(customer => customer.id === id));*/
  }

  /** PUT: update the customer on the server */
  updateHero(customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<Customer>('addCustomer')
      ));
  }

  setter(customer: Customer) {
    // this.customer = customer;
  }

  getter() {
    // return this.customer;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      // this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
