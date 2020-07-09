import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm; /* checkoutForm property to store the form model */

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    /*  set the checkoutForm property with a form model containing name and address fields, using the FormBuilder group() method */
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: ''
    });
   }

  ngOnInit() {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData){
    // Process checkout data here
    this.items  = this.cartService.clearCart();
    this.checkoutForm.reset();

    console.warn("Your order has been submitted", customerData);
    // users need to submit their name and address. When the submit their order, the form should reset and the cart should clean
  }

}