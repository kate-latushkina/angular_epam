import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { UserInfo } from '../../classes/userInfo'
import { AuthAction } from 'src/app/state/actions';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/app.state';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  public isDisabled: boolean = true;
  public isAuth: boolean;
  public loading: boolean = false;
  public authForm: FormGroup;

  constructor(public authService: AuthService, 
    private store: Store<IAppState>
  ) {}

  public ngOnInit(): void {
    this.authService.isAuth.subscribe((user: UserInfo) => {
      this.isAuth = user.isAuth;
    })
    this.authForm = new FormGroup({
      login: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  showUser() {
    const {login, password} = this.authForm.value;
    this.store.dispatch(new AuthAction({login, password}));
  }
}
