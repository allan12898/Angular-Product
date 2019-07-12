import { Component, Output, EventEmitter, Input } from '@angular/core'
import { ProductServices } from './product.services'

@Component({
  selector: "pm-product",
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})

export class ProductComponent {
  @Output() onAddProduct:
    EventEmitter<any> = new EventEmitter();
  @Input() products: any;

  name: string = '';
  searchString: string;
  isVisible: boolean = true;
  toggleImage() {
    this.isVisible = !this.isVisible;
  }

  constructor(private productService: ProductServices) {

  }




  
  getProducts() {
    if (this.searchString == "") {
      this.productService.getProduct().subscribe(data => this.products = data)
    }
    else {
      //return this.products.filter(x => x.productName.toLowerCase().includes(this.searchString));
      this.products = this.products.filter(o =>
        Object.keys(o).some(k =>
          o[k].toString().toLowerCase().indexOf(this.searchString) !== -1));
    }




  }
  addProduct() {

    this.onAddProduct.emit({
      productName: this.name
    });

    this.name = "";
  }


}