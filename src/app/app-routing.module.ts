import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrdersComponent } from './orders/orders.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {path:'products', component: ProductsComponent},
  {path:'orders', component: OrdersComponent},
  {path:'orders/order/:id', component: OrderdetailsComponent},
  {path:'',component: ProductsComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
