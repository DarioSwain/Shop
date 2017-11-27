import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductCategory } from '../models/product-category.enum';

@Injectable()
export class ProductsService {
  products: Array<Product>;

  constructor() {
    this.products = [
      {
        name: 'Apple iPhone X',
        // tslint:disable-next-line:max-line-length
        description: 'iPhone X features an all-screen design with a 5.8-inch Super Retina HD display with HDR and True Tone. Charges wirelessly. Resists water and dust. With iPhone X, the next era of iPhone has begun.',
        category: ProductCategory.Electronics,
        isAvailable: true,
        price: 999,
        ingredients: ['Apple iOS', '5.8"', 'AMOLED (1125x2436)', 'RAM 3 Gb'],
        equivalents: ['Samsung Galaxy S8+']
      },
      {
        name: 'Samsung Galaxy S8+',
        // tslint:disable-next-line:max-line-length
        description: 'For 2017 Samsung have redesigned the most important component of a smartphone: the screen. With an incredible 5.8" Infinity Display with Mobile HDR certification from the UHD alliance, the Samsung Galaxy S8 is truly a wonder to behold.',
        category: ProductCategory.Electronics,
        isAvailable: true,
        price: 824.99,
        ingredients: [],
        equivalents: ['Apple iPhone X']
      },
    ];
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
