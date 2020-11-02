import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  // public login() {}

  public logout() {
    console.log('logout')
  }

  // public isAuthenticated() {}
  
  // public getUserInfo() {}
}
