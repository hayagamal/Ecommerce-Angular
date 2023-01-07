import { Injectable } from '@angular/core';
import ordersJson from 'src/assets/data/orders.json';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}
  //returns all orders placed.
  getOrders() {
    return ordersJson;
  }
  //adds new order to order's list
  setOrders(order: any) {
    ordersJson.push(order);
  }
}
