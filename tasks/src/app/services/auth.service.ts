import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserInfo } from '../classes/userInfo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<UserInfo> = new BehaviorSubject<UserInfo>(new UserInfo());
  public loading = false;
  constructor(private httpClient: HttpClient) {}

  public login(newUser) {
    const user = new UserInfo()
    user.isAuth = true;
    user.login = newUser.login;
    user.name = newUser.name;
    this.isAuth.next(user);
  }

  public setLoading(value: boolean) {
    this.loading = value;
    return this.loading
  }

  public checkUser(name: string, password: number) {
    const data = {login: name, password: password};
    return this.httpClient.post('http://localhost:3004/auth/login', data)
  }

  public showUser(token: string) {    
    return this.httpClient.post('http://localhost:3004/auth/userinfo', {token});
  }

  public logout() {
    const user = new UserInfo()
    user.isAuth = false;
    this.isAuth.next(user);
  }
}
