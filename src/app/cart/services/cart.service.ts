import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item.model';
import { Product } from '../../products/models/product.model';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class CartService {
  private items: Array<OrderItem> = [];
  // Observable string sources
  private channel = new Subject<Array<OrderItem>>();
  // Observable string streams
  public channel$ = this.channel.asObservable();

  public constructor() {
    this.channel.next(this.items);
  }

  addToCart(product: Product) {
    let item = this.items.find(item => item.product == product);
    if (item) {
      item.increaseQuantity();
    } else {
        this.items.push(new OrderItem(product, 1));
    }

    this.channel.next(this.items);
  }

  changeQuantity(item: OrderItem, quantity: number) {
    if (item) {
      if (quantity > item.count) {
        item.increaseQuantity();
      } else if (quantity < item.count) {
        item.decreaseQuantity();
      }

      this.channel.next(this.items);
    }
  }

  getItems(): Observable<Array<OrderItem>> {
    return this.channel$;
  }

  getTotal(): Observable<number> {
    let totalSubject = (new Subject<number>());

    this.channel$.subscribe(items => {
      let total = 0;
      items.forEach(item => total+= item.total);
      totalSubject.next(total);
    });

    return totalSubject.asObservable();
  }
}
