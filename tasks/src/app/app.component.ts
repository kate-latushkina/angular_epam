import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'tasks';
  constructor(public authService: AuthService) {}

  public ngOnInit() {
    const potencialToken = localStorage.getItem('token');
    if (potencialToken) {
      this.authService.setToken(potencialToken);
    }
  }
}
