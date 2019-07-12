import { Component } from '@angular/core';
import { IProduct } from './product/product'
import { ProductServices } from './product/product.services';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html'
})

export class AppComponent {
  products: Array<IProduct> = []

  /**
   *
   */
  constructor(private productService : ProductServices) {
   
    
  }
  title: string = "Hello World";

  addProduct(product: any) {
    this.products.push(product)
    console.log(this.products)
  }

  ngOnInit() {
        this.productService.getProduct()
        .subscribe(data => this.products = data)

  }

}

