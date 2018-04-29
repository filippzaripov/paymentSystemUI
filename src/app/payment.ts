import {Customer} from './customer';
import {Biller} from './biller';

export class Payment {
  id: number;
  date: Date;
  account: string;
  amount: number;
  customer: Customer;
  biller: Biller;

  constructor(customer?: Customer, biller?: Biller, account?: string, amount?: number, ){
    this.date = new Date();
    this.account = account;
    this.amount = amount;
    this.customer = customer;
    this.biller = biller;
  }
}
