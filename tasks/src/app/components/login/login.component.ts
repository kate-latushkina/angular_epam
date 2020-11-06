import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isDisabled: boolean = true;
  isAuth: boolean;
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.sharedAuth.subscribe(isAuth => this.isAuth = isAuth);
  }

  showUser(name, password) {
    this.authService.isAuthenticated(true);
    this.authService.getUserInfo(name, password)
  }
  isDisabledButton(name, password) {
    if (name && password) {
      this.isDisabled = false;
    }
  }
}
