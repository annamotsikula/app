import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductResolver implements Resolve<Observable<Product[]>> {
  constructor(private productService: ProductService) {}

  resolve() {
    return this.productService.getProducts();
  }
}
