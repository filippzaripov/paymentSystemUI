import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {id: 1, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'},
      {id: 2, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'},
      {id: 3, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'},
      {id: 4, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'},
      {id: 5, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'}
    ];
    const billers = [
      {id: 1, name: 'Biller 1', address: 'Kazan'},
      {id: 2, name: 'Biller 2', address: 'Kazan'},
      {id: 3, name: 'Biller 3', address: 'Kazan'},
      {id: 4, name: 'Biller 4', address: 'Kazan'},
    ];
    return {customers, billers};
  }

  constructor() {
  }

}
