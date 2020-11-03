import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: boolean = true;
  public login() {
    console.log('login is successfully')
  }

  public logout() {
    console.log('logout')
  }

  public isAuthenticated() {
    this.isAuth = !this.isAuth
    console.log('here')
  }
  
  // public getUserInfo(name, password) {
  //   console.log('name - ' + name)
  //   console.log('password - ' + password)
  // }
}
