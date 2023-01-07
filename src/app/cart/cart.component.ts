import { Component } from '@angular/core';
import { orderForm } from 'src/assets/types/OrderForm';
import { CartService } from '../Services/cart/cart.service';
import { OrdersService } from '../Services/orders/orders.service';
import { UsersService } from '../Services/users/users.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  form: orderForm = {
    Products: [...this.cartService.cart],
    OrderId: Math.floor(1000 + Math.random() * 9000),
    Total: this.cartService.calculateTotal(),
    PaymentType: '',
    UserId: (Math.random() * 1000000000).toString(),
    Email: '',
    Phone: '',
    Address: '',
    Name: '',
    OrderDate: new Date(),
  };
  constructor(
    private cartService: CartService,
    private orderService: OrdersService,
    private userService: UsersService
  ) {}
  //here we retrieve all picked products to be displayed in cart page.
  getItemsinCart() {
    return this.cartService.getProductsinCart();
  }
  //order's total is calculated by using the cart's service calculateTotal method.
  getTotal() {
    return this.cartService.calculateTotal();
  }
  //on change of radio buttons the order's payment method is set to the event target value.
  onItemChange(event: any) {
    this.form.PaymentType = event.target.value;
  }
  //since that we have to register the user first in order to complete order, the user properties are pushed to the users json file as well as the order
  //and then the cart is set to empty as order is already placed.
  validate(): string {
    let showOrder: boolean = true;
    let cart: any = this.cartService.cart;
    this.form.Address == '' ||
    this.form.Email == '' ||
    this.form.Name == '' ||
    this.form.Phone == '' ||
    this.form.PaymentType == '' ||
    cart.length == 0
      ? (showOrder = false)
      : (showOrder = true);
    if (!showOrder) {
      return 'Please fill the empty fields.';
    } else return ' ';
  }
  submit() {
    if (this.validate() == ' ') {
      let Id = this.form.UserId;
      let Address = this.form.Address;
      let Name = this.form.Name;
      let Phone = this.form.Phone;
      let Email = this.form.Email;
      this.userService.setUser({ Id, Name, Email, Phone, Address });
      let order = { ...this.form };
      this.orderService.setOrders(order);
      this.cartService.cart = [];
      this.form.Email = '';
      this.form.Address = '';
      this.form.Name = '';
      this.form.Phone = '';
    }
  }
}
