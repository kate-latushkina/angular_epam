import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Autentification } from '../classes/autentification';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<Autentification> = new BehaviorSubject<Autentification>(new Autentification());
  constructor(private httpClient: HttpClient) {}

  public login(name: string, password: number) {
    const user = new Autentification()
    user.isAuth = true;
    user.firstName = name;
    user.password = password;
    this.isAuth.next(user);
  }

  public checkUser(name: string, password: number) {
    const data = {login: name, password: password};
    return this.httpClient.post('http://localhost:3004/auth/login', data)
  }

  public logout() {
    const user = new Autentification()
    user.isAuth = false;
    this.isAuth.next(user);
  }
}
