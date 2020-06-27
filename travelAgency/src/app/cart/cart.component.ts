import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  items;
  sum = 0;
  discounts = [];
  finalDiscount = 0;
  totalSum = 0;
  checkoutForm;
  constructor( private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      postalCode: '',
      country: '',
      email: '',
      cardNumber: '',
      cardExpDate: '',
      cvc: '',
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    for ( let item of this.items) {
      item = item.price;
      item = Number(item);
      this.sum += item;
    }
    if (this.sum >= 500) {
      const discount = this.sum * 0.2;
      this.discounts.push(discount);
    } else if ( this.sum >= 200) {
      const discount = this.sum * 0.1;
      this.discounts.push(discount);
  }
    console.log('discounts' + this.discounts);
    for (const discount of this.discounts) {
      this.finalDiscount += discount;
    }
    this.totalSum = this.sum - this.finalDiscount;

}

clearCart() {
    this.cartService.clearCart();
    this.sum = 0;
    this.finalDiscount = 0;
    this.totalSum = 0;
    this.discounts = [];
  }
onSubmit(customerData) {
    alert('Your order has been submitted');
    console.log(customerData);
    this.items = this.clearCart();
    this.checkoutForm.reset();
}
}
