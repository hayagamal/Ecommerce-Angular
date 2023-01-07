import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/assets/types/Order';
import { ProductsService } from '../Services/products/products.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  subtotal: number = 0;
  constructor(private productService: ProductsService) {}
  //on mounting (creation/initialization) of component, each order's subtotal is calculated
  ngOnInit() {
    this.subtotal = this.productService.getsubTotal(this.order);
  }
  //this indicates recieving data from the parent component which is the order.
  @Input() order: Order = {} as Order;
}
