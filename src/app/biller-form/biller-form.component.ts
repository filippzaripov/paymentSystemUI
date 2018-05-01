import {Component, Input, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Biller} from '../biller';
import {BillerService} from '../biller.service';


@Component({
  selector: 'app-biller-form',
  templateUrl: './biller-form.component.html',
  styleUrls: ['./biller-form.component.css']
})
export class BillerFormComponent implements OnInit {

  @Input() biller: Biller;

  constructor(private route: ActivatedRoute,
              private billerService: BillerService,
              private router: Router) {
  }

  ngOnInit() {
    this.getBiller();
  }

  getBiller(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.billerService.getBiller(id)
      .subscribe(biller => this.biller = biller);
  }
  toBillers(): void {
    this.router.navigate(['/billers']);
  }

  add(name: string, address: string): void {
    if (!name && !address) {
      return;
    }
      this.billerService.saveBiller({
        name: name,
        address: address
      } as Biller)
        .subscribe(biller => this.biller = biller);
    this.toBillers();
  }

}
