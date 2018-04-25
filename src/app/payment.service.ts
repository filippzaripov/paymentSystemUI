import {Injectable} from '@angular/core';
import {Payment} from './payment';
import {PAYMENTS} from './mock-payments';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';

@Injectable()
export class PaymentService {
  constructor() {
  }

  getPayments(): Observable<Payment[]> {
    return of(PAYMENTS);
  }

}
