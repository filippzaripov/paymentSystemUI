import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Customer} from './customer';
import {Biller} from './biller';

@Injectable()
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const customers = [
      {id: 1, firstName: 'Filipp', lastName: 'Zaripov', birthDate: new Date(), address: 'Kazan'},
      {id: 2, firstName: 'Filipp', lastName: 'Zaripov', birthDate: new Date(), address: 'Kazan'},
      {id: 3, firstName: 'Filipp', lastName: 'Zaripov', birthDate: new Date(), address: 'Kazan'},
      {id: 4, firstName: 'Filipp', lastName: 'Zaripov', birthDate: new Date(), address: 'Kazan'},
      {id: 5, firstName: 'Filipp', lastName: 'Zaripov', birthDate: new Date(), address: 'Kazan'}
    ];
    const billers = [
      {id: 1, name: 'Biller 1', address: 'Kazan'},
      {id: 2, name: 'Biller 2', address: 'Kazan'},
      {id: 3, name: 'Biller 3', address: 'Kazan'},
      {id: 4, name: 'Biller 4', address: 'Kazan'},
    ];
    const payments = [
      {id: 1, date: new Date(), customer: new Customer('Filipp', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 1', 'Kazan'), account:'12345678', amount: 1000},
      {id: 2, date: new Date(), customer: new Customer('Filipp1', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 2', 'Kazan'), account:'12345678', amount: 1000},
      {id: 3, date: new Date(), customer: new Customer('Filipp2', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 3', 'Kazan'), account:'12345678', amount: 1000},
      {id: 4, date: new Date(), customer: new Customer('Filipp3', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 4', 'Kazan'), account:'12345678', amount: 1000},
      {id: 5, date: new Date(), customer: new Customer('Filipp4', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 5', 'Kazan'), account:'12345678', amount: 1000},
      {id: 6, date: new Date(), customer: new Customer('Filipp5', 'Zaripov', new Date('30.04.1995'), 'Kazan'),biller: new Biller('Biller 6', 'Kazan'), account:'12345678', amount: 1000}

    ];
    return {customers, billers, payments};
  }

  constructor() {
  }

}
