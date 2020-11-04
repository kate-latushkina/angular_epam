import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  sharedAuth = this.isAuth.asObservable();

  public login() {
    console.log('login is successfully')
  }

  public logout() {
    console.log('logout')
  }

  public isAuthenticated(isAuth: boolean) {
    // isAuth = false;
    this.isAuth.next(isAuth);
  }
  
  public getUserInfo(name, password) {
    console.log('name - ' + name)
    console.log('password - ' + password)
  }
}
