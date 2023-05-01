import { Component } from '@angular/core';
import { RegisterForm } from 'src/app/types/Auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  form: RegisterForm = {
    email : '',
    password: '',
    password_confirmation: '',
    firstName: '',
    lastName: '',
  }
  passwordMatched: Boolean = true;

  constructor(private authService: AuthService){}


  onSubmit(): void {
    this.authService.register(this.form)
  }
  isLoading() {
    return this.authService.isLoading
  }
}
