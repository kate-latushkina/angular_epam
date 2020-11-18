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
  public loading: boolean = false;

  constructor(public authService: AuthService, 
    private httpClient: HttpClient,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: Autentification) => {
      this.isAuth = user.isAuth;
    })
  }

  showUser(name: string, password: number) {
    this.loading = this.authService.setLoading(true);
    this.authService
    .checkUser(name, password).pipe(switchMap(token => {
      return this.httpClient.post('http://localhost:3004/auth/userinfo', token).pipe(
        tap(() => this.authService.login(name, password)),
        tap(() => {
          this.router.navigate(['/main']);
          this.loading = this.authService.setLoading(false);
        }))
    }), catchError(error => {
      this.isError = true;
      this.loading = this.authService.setLoading(false)
      return of(error)
    })).subscribe()
  }
}
