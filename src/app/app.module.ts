import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { OrderComponent } from './order/order.component';
import {NavbarComponent} from './navbar/navbar.component'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductComponent,
    OrdersComponent,
    CustomersComponent,
    OrderComponent,
    NavbarComponent,
    OrderdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
