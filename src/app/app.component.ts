import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cartItemCount = 0;

  // Update cart item count
  updateCart(addedQuantity: number) {
    this.cartItemCount += addedQuantity;
  }
}
