import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {OrderItem} from '../models/order-item.model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartItemComponent implements OnInit {
  @Input() item: OrderItem;
  @Output() onQuantityChange: EventEmitter<any> = new EventEmitter<any>();
  count:number;
  applyBackgroundColor: boolean = false;

  constructor() { }

  ngOnInit() {
    this.count = this.item.count;
  }

  changeQuantity(quantity: number) {
    this.onQuantityChange.emit({item: this.item, quantity: quantity});
  }

  drawBackground() {
    this.applyBackgroundColor = true;
  }

  hideBackground() {
    this.applyBackgroundColor = false;
  }
}
