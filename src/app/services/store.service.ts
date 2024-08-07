import { Injectable } from '@angular/core';
import {Product} from "../models/product.model";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class StoreService {


  constructor(private authService: AuthService) {
  }

  products: Product[] = [
    {
      id: 1,
      name: 'Nike Air Max Dn Premium Electric Shoes',
      price: 5279000,
      quantity: 10,
      imageUrl: 'assets/air-max-dn-electric-shoes-3pwX55.jfif',
    },
    {
      id: 2,
      name: 'Nike Pegasus 41 Electric Road Running Shoes',
      price: 4109000,
      quantity: 5,
      imageUrl: 'assets/pegasus-41-electric-road-running-shoes-CNd0pW.jfif',
    },
    {
      id: 3,
      name: 'Nike Vaporfly 3 Electric Road Racing Shoes',
      price: 6919000,
      quantity: 7,
      imageUrl: 'assets/vaporfly-3-electric-road-racing-shoes-ZR5Glm.jfif',
    },
  ]

  cart: Product[] = [];
  total: number = 0;

  addToCart(item: any) {
    if (this.authService.currentUser == null) {
      alert('Bạn cần đăng nhập để thêm vào giỏ hàng');
      return;
    }
    console.log(item);
    console.log(item.id);
    console.log(this.cart);

    let findIndex = this.cart.findIndex((element) => element.id == item.id);
    let findIndex1 = this.products.findIndex((element) => element.id == item.id);

    if (this.products[findIndex1].quantity == 0) {
      return;
    }

    if (findIndex != -1) {
      this.cart[findIndex].quantity += 1;
      this.products[findIndex1].quantity -= 1;
    } else {
      this.cart.push({
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        imageUrl: item.imageUrl,
      });
      this.products[findIndex1].quantity -= 1;
    }
    console.log(this.products[findIndex1].quantity);
    this.totalCost();
  }

  deleteCart(product: Product) {
    if (this.authService.currentUser) {
      let productIndexInCart = this.cart.findIndex((p: any) => p.id === product.id);
      let productIndexInStock = this.products.findIndex((p: any) => p.id === product.id);

      if (productIndexInCart !== -1 && productIndexInStock !== -1) {
        if (this.cart[productIndexInCart].quantity === 1) {
          this.cart.splice(productIndexInCart, 1);
        } else {
          this.cart[productIndexInCart].quantity--;
        }
        this.products[productIndexInStock].quantity++;
        console.log(this.cart);
      }
    } else {
      alert('Please login to remove product from cart');
    }
  }

  deleteAllFromCart() {
    for (let product of this.cart) {
      for (let product2 of this.products) {
        if (product.id == product2.id) {
          product2.quantity += product.quantity;
          console.log(product2.quantity);
        }
      }
    }
    this.cart = [];
    this.total = 0;
  }


  totalCost() {
    this.total = 0;
    for (let item of this.cart) {
      this.total += item.price * item.quantity;
    }
    return this.total;
  }
}






  // deleteCart(product: any) {
  //   console.log(item);
  //   let findIndex = this.cart.findIndex((element) => {
  //     return element.id == .id;
  //   });
  //   let findIndex1 = this.products.findIndex((element) => {
  //     return element.id == item.id;
  //   });
  //   if (this.cart[findIndex].quantity == 1) {
  //     this.cart.splice(findIndex, 1);
  //     this.products[findIndex1].quantity += 1;
  //   } else {
  //     this.cart[findIndex].quantity -= 1;
  //     this.products[findIndex1].quantity += 1;
  //   }
  //   this.totalcost();
  // }
