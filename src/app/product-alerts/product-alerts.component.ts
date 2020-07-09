import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
// setting up the new component to receive a product as a input
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  @Input() product; // indicates that the property value passes in from the component's parent, the product list component.
  @Output() notify = new EventEmitter();
  //this allows the product alert component to emit the event when the value of the notify property changes
  constructor() { }

  ngOnInit() {
  }

}