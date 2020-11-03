import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // @ViewChild('inputUserName') inputUserNameRef: ElementRef;
  
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {

  }

  
}
