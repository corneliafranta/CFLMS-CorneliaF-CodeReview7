import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  constructor() { }
    numberItems;
  ngOnInit() {
    this.displayingItemsNumber(0);
  }

  displayingItemsNumber(numberItems) {
    console.log('at displayingItemsNumber');

    console.log(numberItems);
    this.numberItems = numberItems;
  }
}


