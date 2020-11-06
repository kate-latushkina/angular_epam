import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Autentification } from '../autentification';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<Autentification> = new BehaviorSubject<Autentification>(new Autentification());

  public login(name, password) {
    const user = new Autentification()
    user.isAuth = true;
    user.firstName = name;
    user.password = password;
    this.isAuth.next(user);
  }

  public logout() {
    const user = new Autentification()
    user.isAuth = false;
    this.isAuth.next(user);
  }
}
