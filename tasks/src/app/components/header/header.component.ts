import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isAuth: boolean;
  constructor(public authService: AuthService) {}

  public ngOnInit(): void {
    this.authService.sharedAuth.subscribe(isAuth => this.isAuth = isAuth);
  }

}
