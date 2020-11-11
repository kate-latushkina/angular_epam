import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Autentification } from '../classes/autentification';
import { HttpClient } from '@angular/common/http';
// import { UserEntity } from '../interfaces/user';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isAuth: BehaviorSubject<Autentification> = new BehaviorSubject<Autentification>(new Autentification());
  // public users: UserEntity;
  constructor(private httpClient: HttpClient) {}

  public login(name, password) {
    const user = new Autentification()
    user.isAuth = true;
    user.firstName = name;
    user.password = password;
    this.isAuth.next(user);
    const data = {login: name, password: password};
    return this.httpClient.post('http://localhost:3004/auth/login', data)
  }

  public logout() {
    const user = new Autentification()
    user.isAuth = false;
    this.isAuth.next(user);
  }

  // public postData(user: UserEntity) {
  //   const body = {name: user.name, password: user.password};
  //   this.httpClient.post('http://localhost:3000/auth/userinfo', body); 
  //   console.log(body)
  //   console.log(user)
  // }
}
