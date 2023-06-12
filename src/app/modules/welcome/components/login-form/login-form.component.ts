import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterNames } from 'src/app/core/const/enum';
import { PASSWORD, USERNAME } from 'src/app/core/const/user';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  username: string = "";
  password: string = "";
  isFailed: boolean = false;

  constructor(private router: Router) {}

  login(): void {
    if (this.username === USERNAME && this.password === PASSWORD) {
      localStorage.setItem("user", "active");
      this.router.navigate([RouterNames.HOME]);
    } else {
      this.isFailed = true;
    }
  }
}
