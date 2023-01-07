import { Injectable } from '@angular/core';
import { product } from 'src/assets/types/Product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  Quantity: number = 1;   //as an assumption, products added to order will be singled quantity.
  constructor() {}
  //product picked is pushed to cart array which holds all products picked.
  addToCart(product: product) {
    let Quantity = this.Quantity;
    this.cart.push({ ...product, Quantity });
  }
  //returns all products in cart to be retrieved in cart page.
  getProductsinCart() {
    return this.cart;
  }
  //returns number of products in cart to be shown on navbar
  getQuantityinCart() {
    return this.cart.length;
  }
  //this method filters (removes) the cart from the selected product to be removed
  removeFromCart(product: product) {
    this.cart= this.cart.filter((x:product)=> x.ProductId !== product.ProductId)
  }
  //this method loops on all products in cart and sums their prices to return subtotal
  calculateTotal() {
    let total: number = 0;
    for (let product of this.cart) {
      total += product.ProductPrice;
    }
    return total;
  }
}
