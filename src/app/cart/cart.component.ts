import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartService } from './cart.service';
import { Product } from '../product/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  products: Array<Product>;

  constructor(public cartService: CartService) { }

  ngOnInit() {
    this.products = this.cartService.getProducts();
  }

}
