import { Component, Input, OnInit } from '@angular/core';
import { Order } from 'src/assets/types/Order';
import usersJson from 'src/assets/data/users.json';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { UsersService } from '../Services/users/users.service';
import { ProductsService } from '../Services/products/products.service';
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  subtotal: number =0;
  constructor(private router: ActivatedRoute, private productService: ProductsService){}
  ngOnInit(){
    this.subtotal = this.productService.getsubTotal(this.order);
  }
  @Input() order: Order = {} as Order;
  
  
}
