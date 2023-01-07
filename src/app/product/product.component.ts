import { Component, Input } from '@angular/core';
import { product } from 'src/assets/types/Product';
import { CartService } from '../Services/cart/cart.service';
import { ProductsService } from '../Services/products/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  // product is considered a props from its parent component (products) that's why @Input is used
  // as the product is an input coming from this component's parent.
  constructor(private productsService: ProductsService,private cartService: CartService) {}
  @Input() product: product = {} as product;
  isShowing: boolean = true;
  //on products whose quantity is less than 30 (checked in html using directives),
  //a button is automatically displayed as an indicator to restock
  //this method is invoked using the "Restock" button at which it adds 100 products of this kind.
  editQuantity() {
    this.productsService.incrementQuantity(this.product.ProductId, 100);
  }
  //this method is invoked when clicking on 'Add to Cart' button, it is sent to the addToCart method within the cartService to push the product to cart array.
  addToCart() {
    this.cartService.addToCart(this.product);
  }
}
