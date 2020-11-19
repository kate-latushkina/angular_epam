import { Component, OnInit } from '@angular/core';
import { UserInfo } from 'src/app/classes/userInfo';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public isAuth: boolean;
  public userName: string;
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: UserInfo) => {
      this.isAuth = user.isAuth;
      if(this.isAuth) {
        this.userName = `${user.name.first} ${user.name.last}`;
      }
    })
  }
}
