import { ElementRef, Injectable, Input, Output, ViewChild } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  @Input() isAuth;

  public login() {
    console.log('login is successfully')
    this.isAuthenticated();
  }

  public logout() {
    console.log('logout')
  }

  public isAuthenticated() {
    console.log(!this.isAuth)
    return this.isAuth = !this.isAuth
  }
  
  // public getUserInfo(name, password) {
  //   console.log('name - ' + name)
  //   console.log('password - ' + password)
  // }
}
