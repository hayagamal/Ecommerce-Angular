import { Component } from '@angular/core';
import { CartService } from '../Services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private cartService: CartService) {}

  //this method updates everytime an product is added to cart, calculated by the cart array length.
  updateCartQty() {
    return this.cartService.getQuantityinCart();
  }
}
