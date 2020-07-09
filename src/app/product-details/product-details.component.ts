import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { products } from '../products';
import { CartService } from '../cart.service'; // to use the car service
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  product; // define the product property
  constructor(
    private route: ActivatedRoute, // It is specific to each routed component that the angular router loads
    // you are configuring the component to use a service
    private cartService: CartService // Inject the cart service by adding it to the constructor()
  ) { }

  ngOnInit() {
    // subscribe to route paramentes
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    })// fetch the producct based on the productId
  }
//The route parameters correspond to the path variables you define in the route
//  The URL that matches the route provides the productId
//  Angular uses the productId to display the details for each unique product.

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}