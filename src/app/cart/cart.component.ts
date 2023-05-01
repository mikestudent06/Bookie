import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {

  }

  getCart() {
    return this.cartService.get()
  }
}
