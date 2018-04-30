export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: Date;
  address: string;

  constructor(firstName: string, lastName: string, birthDate: Date, address: string, id?: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.address = address;
  }

}
