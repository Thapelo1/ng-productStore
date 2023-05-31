import { Component, OnInit } from '@angular/core';
import {Product} from "../interfaces/product.interface";
import {MockData} from "../data/mock-data";
import {ProductService} from "../product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  products: Product[] = [];

  constructor(private ps: ProductService) {
    this.products = this.ps.getProducts();
  }

  ngOnInit() {
  }

  removeProduct(product: Product) {
    this.ps.removeProduct(product);
    this.products = this.ps.getProducts();
  }
}
