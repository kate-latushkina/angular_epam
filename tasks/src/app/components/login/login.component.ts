import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { UserInfo } from '../../classes/userInfo'
import { AuthAction } from 'src/app/state/actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public isDisabled: boolean = true;
  public isAuth: boolean;
  public loading: boolean = false;

  constructor(public authService: AuthService, 
    private store: Store<IAppState>
  ) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: UserInfo) => {
      this.isAuth = user.isAuth;
    })
  }

  showUser(login: string, password: number) {
    this.store.dispatch(new AuthAction({login, password}));
  }
}
