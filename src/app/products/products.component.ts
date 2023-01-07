
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products/products.service';
import { product } from 'src/assets/types/Product';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  //here we specified the imported products array of type product (the interface implemented above for strong typing)
  products: product[] = [];
  constructor(private productService: ProductsService){}
  ngOnInit(): void {
    this.products = this.productService.getProducts()
  }

}