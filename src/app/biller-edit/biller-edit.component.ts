import {Component, Input, OnInit} from '@angular/core';
import {BillerService} from '../biller.service';
import {Biller} from '../biller';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-biller-edit',
  templateUrl: './biller-edit.component.html',
  styleUrls: ['./biller-edit.component.css']
})
export class BillerEditComponent implements OnInit {
  @Input() biller: Biller;

  constructor(private billerService: BillerService,
              private route: ActivatedRoute,
              private location: Location,
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

  update(name: string, address: string): void {
    if (!name && !address) {
      return;
    }
      this.billerService.updateBiller({name: name, address: address, id: this.biller.id} as Biller).subscribe();

    this.toBillers();
  }
}
