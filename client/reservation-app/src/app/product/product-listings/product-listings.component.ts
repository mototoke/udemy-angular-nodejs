import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shaerd/product.service';

@Component({
  selector: 'app-product-listings',
  templateUrl: './product-listings.component.html',
  styleUrls: ['./product-listings.component.scss']
})
export class ProductListComponent implements OnInit {

  products: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    const productObservable = this.productService.getProducts();
    productObservable.subscribe(
      (data) => {this.products = data;},
      (err) => {console.log(err)},
      () => {console.log('complete')}
    );
  }

}
