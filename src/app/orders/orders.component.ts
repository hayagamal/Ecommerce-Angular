import { Component, OnInit } from '@angular/core';
import { Order } from 'src/assets/types/Order';
import { OrdersService } from 'src/app/Services/orders/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService){}
  orders: Order[] = [];
  ngOnInit(): void{
    //this.ordersService.setOrders({OrderId: 6969});
    this.orders = this.ordersService.getOrders();
    
  }
}
