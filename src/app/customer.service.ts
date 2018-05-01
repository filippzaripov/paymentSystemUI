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


  constructor(private http: HttpClient) {
  }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl).pipe(
      catchError(this.handleError('getCustomers', []))
    );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url);
  }

  updateCustomer(customer: Customer): Observable<any> {
    console.log("This is the customer Id in customer service: " + customer.id);
    const url = `${this.customersUrl}/${customer.id}`;
    return this.http.put(url, customer, httpOptions).pipe(
      catchError(this.handleError<any>('updateCustomer'))
    );
  }

  deleteCustomer(customer: Customer | number): Observable<Customer> {
    const id = typeof customer === 'number' ? customer : customer.id;
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, httpOptions).pipe(
      catchError(this.handleError<Customer>('deleteCustomer'))
    );
  }

  saveCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, httpOptions).pipe(
      catchError(this.handleError<Customer>('addCustomer')
      ));
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
