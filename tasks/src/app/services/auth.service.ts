import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Autentification } from '../classes/autentification';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<Autentification> = new BehaviorSubject<Autentification>(new Autentification());
  public token = null;
  public loading = false;
  constructor(private httpClient: HttpClient) {}

  public login(name: string, password: number) {
    const user = new Autentification()
    user.isAuth = true;
    user.firstName = name;
    user.password = password;
    this.isAuth.next(user);
  }

  public isAuthentication() {
    return this.isAuth;
  }

  public setLoading() {
    this.loading = !this.loading;
    return this.loading
  }

  public checkUser(name: string, password: number) {
    const data = {login: name, password: password};
    return this.httpClient.post('http://localhost:3004/auth/login', data).pipe(
      tap(token => {
        localStorage.setItem('token', token['token']);
        this.setToken(token['token']);
      })
    )
  }

  public setToken(token: string) {
    this.token = token
  }

  public logout() {
    const user = new Autentification()
    user.isAuth = false;
    this.isAuth.next(user);
  }
}
