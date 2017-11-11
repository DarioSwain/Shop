import { Injectable } from '@angular/core';
import { ProductsService } from '../product/products.service';

@Injectable()
export class CartService {

  constructor(public productService: ProductsService) { }

  getProducts() {
    return this.productService.getProducts().slice(0, 1);
  }
}
