import { Injectable, OnInit } from '@angular/core';
import productsJson from 'src/assets/data/porducts.json';
@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  price: number = 0;
  subTotal: number = 0;
  constructor() {}
  ngOnInit() {}
  // returns all products
  getProducts() {
    return productsJson;
  }
  //by this method, we loop on the order's products array attached to the order, in order to get the full information of each product in order
  // to show it in the orderDetails view, the whole product object retrieved as result of find() method is added to the prods array.
  //the prods array holds the order's products full object.
  //also, the quantity of each product is added to the 'fullprodinfo' object to be pushed in the prods array mentioned in comment above
  // finally, the order's subtotal is also calculated in this method by intializing price property with the productPrice of product when found from productService if not found, price is 0.

  getOrderDetails(products: any) {
    let prods: any = [];
    for (let product of products) {
      let qty: number = product.Quantity;
      let prod: {} = this.getProducts().find(
        (x: any) => x.ProductId == product.ProductId
      );
      let fullprodinfo = { ...prod, qty };
      prods.push(fullprodinfo);
    }

    return prods;
  }
  //since the total must be retrieved within the order's list before viewing the order's details,
  //the order's products is looped on to calculate their total and this method is called twice,
  //on the order's list and when selecting an order to show its details.
  getsubTotal(order: any): number {
    let totalPerOrder = 0;
    console.log(order.Products);
    for (let p of order.Products) {
      let qty: number = p.Quantity;
      this.getProducts().find((x: any) =>
        x.ProductId == p.ProductId
          ? (this.price = x.ProductPrice)
          : (this.price = 0)
      );
      this.subTotal += this.price * qty;
      totalPerOrder = this.subTotal;
    }
    this.subTotal = 0;
    return totalPerOrder;
  }
  //increments the quantity for products whose quantity is about to become out of stock
  incrementQuantity(productid: number, quantity: number) {
    let product = this.getProducts().find((x: any) => x.ProductId == productid);
    product.AvailablePieces += quantity;
  }
}
