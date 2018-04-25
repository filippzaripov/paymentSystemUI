import {Payment} from './payment';

export const PAYMENTS: Payment[] = [
  {
    id: 1, date: '01.01.01 00:00',
    customer: {id: 1, firstName: 'Filipp', lastName: 'Zaripov', birthDate: '30.04.1995', address: 'Kazan'},
    biller: {id: 1, name: 'Biller 1', address: 'Kazan'},
    account: '1234567', amount: 100
  },
  {
    id: 2, date: '01.01.01 00:00',
    customer: {id: 2, firstName: 'Marat', lastName: 'Sitdikov', birthDate: 'zabyl', address: 'Kazan'},
    biller: {id: 2, name: 'Biller 2', address: 'Moscow'},
    account: '000000', amount: 2345
  },
  {
    id: 3, date: '01.01.01 00:00',
    customer: {id: 3, firstName: 'Eric', lastName: 'Zaripov', birthDate: '18.06.2000', address: 'Kazan'},
    biller: {id: 3, name: 'Biller 3', address: 'Perm'},
    account: '2341560', amount: 256
  },
  {
    id: 4, date: '01.01.01 00:00',
    customer: {id: 4, firstName: 'Stacy', lastName: 'Zaripova', birthDate: '21.11.1994', address: 'Kazan'},
    biller: {id: 1, name: 'Biller 1', address: 'Kazan'},
    account: '0123456731', amount: 10000123
  }


]
