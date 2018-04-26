export class Customer {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  address: string;

  constructor(firstName: string, lastName: string, birthDate: string, address: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthDate = birthDate;
    this.address = address;
  }

}
