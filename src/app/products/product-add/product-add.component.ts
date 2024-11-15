import { Component } from '@angular/core';
import { Product } from '../product.model';
import { ProductsService } from '../products.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
  product$: Observable<Product> | undefined;

  constructor(
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    const productId = parseInt(this.activatedRoute.snapshot.params['id']);
    this.getProduct(productId);
  }

  getProduct(id: number) {
    this.product$ = this.productsService.getById(id);
  }

  addProduct(product: Product) {
    this.productsService.add(product).subscribe(this.goToProductsPage);
  }

  updateProduct(product: Product) {
    this.productsService.update(product).subscribe(this.goToProductsPage);
  }

  deleteProduct(id: number) {
    this.productsService.delete(id).subscribe(this.goToProductsPage);
  }

  goToProductsPage = () => this.router.navigate(['/products']);
}
