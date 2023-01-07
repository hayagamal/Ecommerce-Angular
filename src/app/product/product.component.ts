import { Component,Input } from '@angular/core';
import { product } from 'src/assets/types/Product';
import { ProductsService } from '../Services/products/products.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  // product is considered a props from its parent component (products) that's why @Input is used
  // as the product is an input coming from this component's parent.
  constructor(private productsService: ProductsService ){}
  @Input() product: product = {} as product;
  isShowing : boolean = true;
  editQuantity(){
    this.productsService.incrementQuantity(this.product.ProductId, 100);
  }
  colorChange(){

  }
  

}
