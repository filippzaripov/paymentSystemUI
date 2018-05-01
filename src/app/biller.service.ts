import {Injectable} from '@angular/core';
import {Biller} from './biller';
import {BILLERS} from './mock-billers';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable()
export class BillerService {
  private billersUrl = 'http://localhost:8080/billers';

  constructor(private http: HttpClient) {
  }

  getBillers(): Observable<Biller[]> {
    return this.http.get<Biller[]>(this.billersUrl).pipe(
      catchError(this.handleError('getBillers', []))
    );
  }

  getBiller(id: number): Observable<Biller> {
    const url = `${this.billersUrl}/${id}`;
    return this.http.get<Biller>(url);
  }

  updateBiller(biller: Biller): Observable<any> {
    const url = `${this.billersUrl}/${biller.id}`;
    return this.http.put(url, biller, httpOptions).pipe(
      catchError(this.handleError<any>('updateBiller'))
    );
  }

  deleteBiller(biller: Biller | number): Observable<Biller> {
    const id = typeof biller === 'number' ? biller : biller.id;
    const url = `${this.billersUrl}/${id}`;

    return this.http.delete<Biller>(url, httpOptions).pipe(
      catchError(this.handleError<Biller>('deleteBiller'))
    );
  }

  saveBiller(biller: Biller): Observable<Biller> {
    return this.http.post<Biller>(this.billersUrl, biller, httpOptions).pipe(
      catchError(this.handleError<Biller>('addBiller')
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
