import {Injectable} from '@angular/core';
import {Biller} from './biller';
import {BILLERS} from './mock-billers';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';


@Injectable()
export class BillerService {
  constructor() {
  }

  getBillers(): Observable<Biller[]> {
    return of(BILLERS);
  }

  getBiller(id: number): Observable<Biller> {
    return of(BILLERS.find(biller => biller.id === id));
  }

}
