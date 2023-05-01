import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './books/book/book.component';
import { BooksService } from './books/books.service';
import { BooksModule } from './books/books.module';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavComponent } from './nav/nav.component';
import { CommonModule } from '@angular/common';
import { AuthModule } from './auth/auth.module';

@NgModule(
  {
   declarations: [AppComponent, CartComponent, NavComponent],
   imports: [BrowserModule, BooksModule, AppRoutingModule,CommonModule,AuthModule],
   bootstrap: [AppComponent],
  //  providers: [BooksService] : this is the same as this: // @Injectable({providedIn: 'root'}), it makes our service available globally in the project
  }
)
export class AppModule {}
