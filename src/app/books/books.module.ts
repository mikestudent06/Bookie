import { BookComponent } from './book/book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksService } from './books.service';
import { BooksComponent } from './books.component';
import { CarouselComponent } from './carousel/carousel.component';



@NgModule({
  declarations: [BooksComponent, BookComponent, CarouselComponent],
  imports: [
    CommonModule,
  ],
  providers: [BooksService],
  exports: [BooksComponent]
})
export class BooksModule { }
