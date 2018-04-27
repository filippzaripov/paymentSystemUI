import {Component, OnInit} from '@angular/core';
import {BillerService} from '../biller.service';
import {Biller} from '../biller';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-billers',
  templateUrl: './billers.component.html',
  styleUrls: ['./billers.component.css']
})
export class BillersComponent implements OnInit {
  billers: Biller[];

  constructor(private billerService: BillerService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.getBillers();
  }

  getBillers() {
    this.billerService.getBillers()
      .subscribe(billers => this.billers = billers);
  }


  editBiller(id: string): void {
    this.router.navigate([`/biller/${id}`]);
  }


  /*addName(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.customerService.saveCustomer({id: 100, firstName: name} as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  add(firstName: string, lastName: string, birthDate: string, address: string): void {
    if (!firstName && !lastName) {
      return;
    }
    this.customerService.saveCustomer({
      firstName: firstName,
      lastName: lastName,
      birthDate: birthDate,
      address: address
    } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }*/

  delete(biller: Biller): void {
    this.billers = this.billers.filter(function (bi) {
      return bi !== biller;
    });
    this.billerService.deleteBiller(biller).subscribe();
  }
}
