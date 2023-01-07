import { Injectable } from '@angular/core';
import { product } from 'src/assets/types/Product';
@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: any[] = [];
  Quantity: number = 1;
  constructor() {}
  addToCart(product: product) {
    let Quantity = this.Quantity;
    this.cart.push({ ...product, Quantity });
  }
  getProductsinCart() {
    return this.cart;
  }
  getQuantityinCart() {
    return this.cart.length;
  }
  removeFromCart() {}
  calculateTotal() {
    let total: number = 0;
    for (let product of this.cart) {
      total += product.ProductPrice;
    }
    return total;
  }
}
