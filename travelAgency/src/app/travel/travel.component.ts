import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.sass']
})
export class TravelComponent implements OnInit {
  travels = travels;
  constructor( private  cartService: CartService) { }
  addToCart(travel) {
    window.alert('Your travel has been added to the cart!');
    this.cartService.addToCart(travel);
    console.log(this.cartService.items);
  }

  ngOnInit() {
  }

}
