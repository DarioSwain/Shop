import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';

import { CartService } from './services/cart.service';

import { MatButtonModule, MatCardModule, MatListModule, MatToolbarModule, MatFormFieldModule, MatInputModule } from '@angular/material';

import { ProductsModule } from '../products/products.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,

    ProductsModule,
  ],
  providers: [
    CartService
  ],
  declarations: [
    CartListComponent,
    CartItemComponent,
],
  exports: [
    CartListComponent,
  ],
})
export class CartModule { }
