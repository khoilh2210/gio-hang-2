import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor(private authService: AuthService) { }

  products : Product[] = [
    {
      id: 1,
      name: 'Nike Air Max Dn Premium Electric Shoes',
      price: 5279000,
      inStock: 10,
      imageUrl: 'assets/air-max-dn-electric-shoes-3pwX55.jfif',
    },
    {
      id: 2,
      name: 'Nike Pegasus 41 Electric Road Running Shoes',
      price: 4109000,
      inStock: 5,
      imageUrl: 'assets/pegasus-41-electric-road-running-shoes-CNd0pW.jfif',
    },
    {
      id: 3,
      name: 'Nike Vaporfly 3 Electric Road Racing Shoes',
      price: 6919000,
      inStock: 7,
      imageUrl: 'assets/vaporfly-3-electric-road-racing-shoes-ZR5Glm.jfif',
    },
  ]

  cart: any[] = [];

  addToCart(product: any) {
    if (this.authService.currentUser) {
      let productInCart = this.cart.find((p: any) => p.id === product.id);
      let productInStock = this.products.find((p: any) => p.id === product.id);
      if (productInStock!.inStock == 0) {
        return;
      }
      if (productInCart) {
        productInCart.quantity++;
        productInStock!.inStock--;
        console.log(this.cart)
      } else {
        this.cart.push({...product, quantity: 1});
        productInStock!.inStock--;
        console.log(this.cart)
      }
    } else {
      alert('Please login to add product to cart');
    }
  }
}
