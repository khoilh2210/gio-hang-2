import { Component, Input } from '@angular/core';

import {StoreService} from "../../../services/store.service";

import {Product} from "../../../models/product.model";

import {TotalCostComponent} from "../../total-cost/total-cost.component";


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    TotalCostComponent
  ],
  templateUrl:'./cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  @Input() product!: Product;

  constructor(public storeService: StoreService) {
    console.log(this.storeService.cart);
  }

  protected readonly StoreService = StoreService;
}

