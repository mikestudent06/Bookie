import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  //Importing the parent in the child
  @Input() book : Book = {} as Book;

  //handling button remove from cart with the boolean:
  isInCart: Boolean = false;

  //Exporting the child to the parent:
  // @Output() bookEmitter = new EventEmitter<Book>();

  //Constructor:
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }

  // ngOnDestroy(): void {
  //   console.log("Componenent rendered");
  // }
  addToCart() {
    this.isInCart = true;
    // this.bookEmitter.emit(this.book) we're no more emmitting for we want to actually using the cartService
    this.cartService.add(this.book)
    // console.log(this.book);
  }
  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book)
  }
}
