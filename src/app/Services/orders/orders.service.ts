import { Injectable } from '@angular/core';
import ordersJson from 'src/assets/data/orders.json';
@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor() {}
  getOrders() {
    return ordersJson;
  }
  setOrders(order: any) {
    ordersJson.push(order);
  }
}
