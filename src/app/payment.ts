import {Customer} from './customer';
import {Biller} from './biller';

export class Payment {
  id: number;
  date: string;
  account: string;
  amount: number;
  customer: Customer;
  biller: Biller;
}
