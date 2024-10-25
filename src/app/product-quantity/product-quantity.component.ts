import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-quantity',
  templateUrl: './product-quantity.component.html',
  styleUrls: ['./product-quantity.component.css']
})
export class ProductQuantityComponent {
  @Output() productAdded = new EventEmitter<number>();

  products: Product[] = [
    {
      name: 'Trimmer',
      image: 'assets/',
      description: 'High-quality product suitable for various needs.',
      price: 100,
      availableQuantity: 20
    }
  ];

  selectedProduct: Product = this.products[0];
  userQuantity = 1;
  errorMessage = '';
  totalPrice = 0;

  addToCart() {
    if (this.userQuantity <= 0 || this.userQuantity > this.selectedProduct.availableQuantity) {
      this.errorMessage = 'The requested quantity is not available.';
    } else {
      this.selectedProduct.availableQuantity -= this.userQuantity;
      this.totalPrice = this.userQuantity * this.selectedProduct.price;
      this.errorMessage = '';
      alert(`Added ${this.userQuantity} ${this.selectedProduct.name}(s) to cart. Total price: $${this.totalPrice}`);
      this.productAdded.emit(this.userQuantity); // Emit quantity to parent component
    }
  }

  selectProduct(product: Product) {
    this.selectedProduct = product;
    this.userQuantity = 1;
    this.errorMessage = '';
    this.totalPrice = 0;
  }
}
