import { Component, OnInit } from '@angular/core';
import { Autentification } from 'src/app/classes/autentification';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean;
  public userName: string;
  public userPassword: number;
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: Autentification) => {
      this.isAuth = user.isAuth;
      this.userName = user.firstName;
      this.userPassword = user.password;
    })
  }
}
