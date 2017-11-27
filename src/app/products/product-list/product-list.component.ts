import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  products: Array<Product>;

  constructor(public productsService: ProductsService) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

}
