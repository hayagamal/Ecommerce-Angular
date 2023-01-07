import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from 'src/app/Services/orders/orders.service';
import { ProductsService } from '../Services/products/products.service';
import { UsersService } from '../Services/users/users.service';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.scss'],
})
export class OrderdetailsComponent implements OnInit {
  orderId: any;
  order: any;
  ordersInService: [] = this.service.getOrders(); //returns all orders placed
  currentOrderUser: any;
  productsOfOrder: any;
  totalPerOrder: number = 0;

  constructor(
    private activatedRoute: ActivatedRoute,
    private service: OrdersService,
    private usersService: UsersService,
    private productService: ProductsService
  ) {}
  @Output() Total = new EventEmitter<number>();
  ngOnInit(): void {
    //we get params (orderid) by using the activatedRoute in order to retrieve this order's info.
    this.orderId = this.activatedRoute.snapshot.paramMap.get('id');
    this.order = this.ordersInService.find(
      (x: any) => x.OrderId == this.orderId
    );
    this.currentOrderUser = this.getUserInfo(this.order); //we get the user as well by the userid property in the order's object.
    this.productsOfOrder = this.getOrderDetails(this.order.Products);
  }
  //by this method, the user full information is returned from userService by searching for the userId in placed order's object in the all users
  //the find array method returns the whole user object to be able to retrieve their all information.
  getUserInfo(order: any): any {
    let userId = order.UserId;
    let user = this.usersService.getUsers().find((x: any) => x.Id == userId);

    return user;
  }

  getOrderDetails(products: any): any {
    return this.productService.getOrderDetails(products);
  }
  //here the total price of each product in order is calculated then summed as order's subtotal
  GetTotalPerItem(qty: number, price: number): number {
    this.totalPerOrder += qty * price;
    return qty * price;
  }

  getTotal(order: any): number {
    return this.productService.getsubTotal(order);
  }
}
