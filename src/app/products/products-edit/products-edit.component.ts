import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent {
  oldProduct: Product  | null | undefined = null;
  @Output() add = new EventEmitter<Product>();
  @Output() update = new EventEmitter<Product>();
  @Output() delete = new EventEmitter<number>();
  @Input() set product(product: Product | null | undefined) {
    this.productForm.reset({ name: '', price: 0 });
    if (product && product.id !== 0) {
      this.productForm.setValue({
        name: product.name,
        price: product.price,
      });
    }
    this.oldProduct = product;
  }

  productForm = new FormGroup({
    name: new FormControl('', Validators.required),
    price: new FormControl(0, Validators.min(0)),
  });

  onSubmit() {
    this.productForm.markAllAsTouched();

    if (this.productForm.invalid) return;

    const product = {
      id: this.oldProduct?.id ?? 0,
      name: this.productForm.value.name ?? '',
      price: this.productForm.value.price ?? 0,
    };

    this.oldProduct ? this.update.emit(product) : this.add.emit(product);
  }
}

