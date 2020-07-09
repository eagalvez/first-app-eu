import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// inject the HttpClient service into your service so your app can fetch data and interact with external APIs and resources.
@Injectable({
  providedIn:'root'
})
export class CartService {

  items = []; // to store the array of the current products in the cart

  addToCart(product) {
    this.items.push(product);
  }

  getItems(){
    return this.items;
  }

  clearCart(){
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.http.get('/assets/shipping.json');
  }
  constructor(
    private http: HttpClient
  ) { }

}