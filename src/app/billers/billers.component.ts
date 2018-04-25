import {Component, OnInit} from '@angular/core';
import {BillerService} from '../biller.service';
import {Biller} from '../biller';

@Component({
  selector: 'app-billers',
  templateUrl: './billers.component.html',
  styleUrls: ['./billers.component.css']
})
export class BillersComponent implements OnInit {
  billers: Biller[];

  constructor(private billerService: BillerService) {
  }

  ngOnInit() {
    this.getBillers();
  }

  getBillers() {
    this.billerService.getBillers()
      .subscribe(billers => this.billers = billers);
  }

}
