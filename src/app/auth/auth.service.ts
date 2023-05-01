import { Injectable } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { LoginForm, RegisterForm } from '../types/Auth';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Router } from '@angular/router';
import {signOut } from "firebase/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated : boolean = false;
  isLoading: boolean = false;
  passwordMatched: boolean = true;


  constructor(private router: Router) { }

  login(form: LoginForm) {
    const auth = getAuth();
    if (this.isLoading) return;
    this.isLoading = false;

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;

        //what we do if the user is logged in:
        this.isAuthenticated = true;
        alert("Login sucessfull")
        this.router.navigate([''])
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        this.isAuthenticated = false;
        alert("Credentials do not match our records")
      }).finally(()=> {
        this.isLoading = false
      })
      }

      register(form: RegisterForm) {
        if(form.password != form.password_confirmation) {
          this.passwordMatched = false;
          return
        }
        const auth = getAuth();
        if (this.isLoading) return;
        this.isLoading = true;
        createUserWithEmailAndPassword(auth, form.email, form.password)
        .then((userCredential) => {
          this.isAuthenticated = true;
          alert("Registration sucessfull")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          this.isAuthenticated = false;
          alert("Credentials do not match our records")
        }).finally(()=> {
          this.isLoading = false
        })
            // console.log(this.form);
      }

      logout() {
        const auth = getAuth();
        signOut(auth).then(() => {
          // Sign-out successful.
          this.router.navigate(['login']);
          this.isAuthenticated = false;
        }).catch((error) => {
          // An error happened.
          alert("An error occured during the logout")
        });
      }

  }

