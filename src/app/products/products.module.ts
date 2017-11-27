import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { ProductsService } from './services/products.service';

import { MatButtonModule, MatCardModule } from '@angular/material';

@NgModule({
    imports: [
        CommonModule,
        MatButtonModule,
        MatCardModule,
    ],
    providers: [
        ProductsService,
    ],
    declarations: [
        ProductListComponent,
        ProductComponent
    ],
    exports: [
        ProductListComponent
    ]
})
export class ProductsModule { }
