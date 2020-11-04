import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ViewChild('inputUserName') inputUserNameRef: ElementRef;
  // @ViewChild('inputUserPassword') inputUserPassword: ElementRef;
  public isDisabled: boolean = true;
  @Input() isAuth;

  constructor(public authService: AuthService) {}

  public ngOnInit(): void {

  }
  isDisabledButton(name, password) {
    if (name && password) {
      this.isDisabled = false;
    }
  }
}
