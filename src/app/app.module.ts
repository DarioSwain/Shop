import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Angular Material Modules
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';


import { ProductsModule } from './products/products.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,

    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
