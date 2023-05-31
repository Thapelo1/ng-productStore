import { Injectable } from '@angular/core';
import {Product} from "./interfaces/product.interface";
import {MockData} from "./data/mock-data";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [];

  constructor() {
    this.products = MockData.products;
  }

  getProducts(){
    return this.products;
  }

  removeProduct(product: Product) {
    let index = this.products.indexOf(product);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }
}
