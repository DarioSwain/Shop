import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CartService } from '../services/cart.service';
import {OrderItem} from '../models/order-item.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartListComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private totalSubscription: Subscription;
  items: Array<OrderItem>;
  total: number;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.subscription = this.cartService.getItems().subscribe(items => this.items = items);
    this.totalSubscription = this.cartService.getTotal().subscribe(total => this.total = total);
  }

  ngOnDestroy() {
      this.subscription.unsubscribe();
      this.totalSubscription.unsubscribe();
  }
}
