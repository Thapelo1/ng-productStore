import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../interfaces/product.interface";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() removeProduct = new EventEmitter();

  deleteProduct(){
    this.removeProduct.emit(this.product)
  }


}
