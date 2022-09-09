import { ProductFormComponent } from './admin/product-form/product-form.component';
import { AdminGuard } from './security/helpers/admin.guard';
import { AuthGuard } from './security/helpers/auth.guard';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { AdminOrdersComponent } from './admin/admin-orders/admin-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { HomeComponent } from './layout/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './security/login/login.component';
import { AdminProductsComponent } from './admin/admin-products/admin-products.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "products", component: ProductsComponent },
  { path: "shopping-cart", component: ShoppingCartComponent },

  { path: "check-out", component: CheckoutComponent, canActivate: [AuthGuard] },
  { path: "order-success", component: OrderSuccessComponent, canActivate: [AuthGuard] },
  { path: "my/orders", component: MyOrdersComponent, canActivate: [AuthGuard] },
  { path: "admin/products", component: AdminProductsComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/orders", component: AdminOrdersComponent, canActivate: [AuthGuard, AdminGuard] },
  { path: "admin/products/new", component: ProductFormComponent, canActivate: [AuthGuard, AdminGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
