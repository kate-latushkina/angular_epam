import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService} from '../../services/auth.service';
import { Autentification } from '../../classes/autentification'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public isError: boolean;
  public isDisabled: boolean = true;
  public isAuth: boolean;

  constructor(public authService: AuthService, 
    private httpClient: HttpClient,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: Autentification) => {
      this.isAuth = user.isAuth;
    })
  }

  showUser(name, password) {
    this.authService
    .login(name, password).pipe(switchMap(token => {
      return this.httpClient.post('http://localhost:3004/auth/userinfo', token).pipe(
        tap(user => console.log(user)),
        tap(() => this.router.navigate(['/main'])))
    }), catchError(error => {
      this.isError = true;
      return of(error)
    })).subscribe()
  }

  isDisabledButton(name, password) {
    if (name && password) {
      this.isDisabled = false;
    }
  }
}
