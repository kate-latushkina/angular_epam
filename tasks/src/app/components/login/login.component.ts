import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Autentification } from '../../autentification'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public isDisabled: boolean = true;
  public isAuth: boolean;
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: Autentification) => {
      this.isAuth = user.isAuth;
    })
  }

  showUser(name, password) {
    this.authService.login(name, password);
    
  }
  isDisabledButton(name, password) {
    if (name && password) {
      this.isDisabled = false;
    }
  }
}
