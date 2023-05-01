import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  constructor(/*Creating a dependacy injection --->*/private booksService : BooksService) {
    // console.log("constructor");
    //Whenever the class is created, I do:
    // this.books = booksService.getBooks();
  }

  // @Input() dashImg: string = '../../assets/img/Mikmo 3.PNG';
  showBooks: boolean = false;
  hideBooks: boolean = false;
  vanishBtn: boolean = false;
  text: string = "";
  books: Book[] = [];



ngOnInit() {
  // console.log("onInit");
  //Whenever the component is created, then I do all tasks bellow:
  this.books = this.booksService.getBooks()
}
  showBtn() {
    this.showBooks = true;
  }

  hideBtn() {
    this.showBooks = false;
  }

  inputChange(e: any) {
    this.text = e.target.value;
  }
  // addToCart(book : Book) {
  //   console.log(book);
  // }

  onSearch(searchTerm: String) {
    console.log(searchTerm);
    // implement book filtering logic here
  }


}
