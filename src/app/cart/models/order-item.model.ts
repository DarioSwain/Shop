import { Product } from '../../products/models/product.model';
import {Countable} from './countable';

export class OrderItem implements Countable {
    product: Product;
    count: number = 0;
    total?: number;

    constructor(product: Product, count: number) {
        this.product = product;
        this.count = count;
        this.total = product.price;
    }

    increaseQuantity(): void {
        this.count += 1;
        this.recalculateTotal();
    }

    decreaseQuantity(): void {
        if (this.count !== 1) {
            this.count -=1;
            this.recalculateTotal();
        }
    }

    private recalculateTotal(): void {
        this.total = this.count * this.product.price;
    }
}
