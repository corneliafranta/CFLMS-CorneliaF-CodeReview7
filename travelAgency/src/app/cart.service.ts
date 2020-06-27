import { Injectable } from '@angular/core';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  numbersItems = 0;
  constructor( ) {
    console.log('at CartService constructor');
    console.log(this.numbersItems);
  }

  addToCart(product) {
    this.items.push(product);
    this.numbersItems++;
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}
