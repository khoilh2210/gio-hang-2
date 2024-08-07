import { Routes } from '@angular/router';
import {HomeComponent} from "./components/page/home/home.component";
import {ListProductComponent} from "./components/page/list-product/list-product.component";
import {DetailProductComponent} from "./components/page/detail-product/detail-product.component";
import {CartComponent} from "./components/page/cart/cart.component";

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },

  {
    path: 'products',
    component: ListProductComponent,
  },

  {
    path: 'cart',
    component: CartComponent,
  },

  {
    path: 'product/:id',
    component: DetailProductComponent
  }
];
