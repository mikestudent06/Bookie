import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { BooksComponent } from '../books/books.component';
import { CartComponent } from '../cart/cart.component';
import { LoginComponent } from '../auth/login/login.component';
import { RegistrationComponent } from '../auth/register/registration.component';
import { AuthGuard } from '../auth/auth.guard';

const routes : Routes  = [
  {path: '' , component: BooksComponent},
  {path: 'cart' , component: CartComponent, canActivate : [AuthGuard]},
  {path: 'login' , component: LoginComponent},
  {path: 'register' , component: RegistrationComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
