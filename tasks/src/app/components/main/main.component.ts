import { Component } from '@angular/core';
// import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  public isText: string;
  public isAuth: boolean;

  // constructor(public authService: AuthService) {}

  public ngOnInit() {
    this.isAuth = true;
  }
  public setValue(value: string) {
    this.isText = value;
  }
}
