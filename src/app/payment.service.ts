import {Injectable} from '@angular/core';
import {Payment} from './payment';
import {Customer} from './customer';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';
import {of} from 'rxjs/observable/of';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class PaymentService {
  private paymentsUrl = 'http://localhost:8080/payments';


  constructor(private http: HttpClient) {
  }

  getPayments(): Observable<Payment[]> {
    return this.http.get<Payment[]>(this.paymentsUrl).pipe(
      catchError(this.handleError('getPayments', []))
    );
  }

  getPayment(id: number): Observable<Payment> {
    const url = `${this.paymentsUrl}/${id}`;
    return this.http.get<Payment>(url);
  }

  updatePayment(payment: Payment): Observable<any> {
    return this.http.put(this.paymentsUrl, payment, httpOptions).pipe(
      catchError(this.handleError<any>('updatePayment'))
    );
  }

  deletePayment(payment: Payment | number): Observable<Payment> {
    const id = typeof payment === 'number' ? payment : payment.id;
    const url = `${this.paymentsUrl}/${id}`;

    return this.http.delete<Payment>(url, httpOptions).pipe(
      catchError(this.handleError<Payment>('deletePayment'))
    );
  }

  savePayment(payment: Payment, customer_id: number, biller_id: number): Observable<Payment> {
    const url = `${this.paymentsUrl}/${customer_id}&${biller_id}`;
    return this.http.post<Payment>(this.paymentsUrl, payment, httpOptions).pipe(
      catchError(this.handleError<Payment>('addPayment')
      ));
  }

  getPaymentsFilteredByCustomer(filteredByCustomer: number): Observable<Payment[]>{
    const url = `${this.paymentsUrl}/${filteredByCustomer}`;
    return this.http.get<Payment[]>(url);
  }

  getPaymentsFilteredByBiller(filteredByBiller: number): Observable<Payment[]>{
    const url = `${this.paymentsUrl}/${filteredByBiller}`;
    return this.http.get<Payment[]>(url);
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
