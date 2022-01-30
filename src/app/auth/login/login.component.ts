import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { MainModalComponent } from 'src/app/modal-global/main-modal/main-modal.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLoginFail= false;
  loginUser: LoginUsuario;
  nombreUsuario: string = '';
  password: string = '';
  roles: string[] = [];
  errorMsj: string;



  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.gerAuthorities();
    }
  }

  onLogin(): void{
    this.openDialog();
    this.loginUser = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUser).subscribe( data => {
      this.isLogged = true;
      this.isLoginFail = false;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.dialog.closeAll();
      this.router.navigate(['/dev']);
    },
    err => {
      this.isLogged = false;
      this.isLoginFail = true;
      console.log(err);
      this.dialog.closeAll();
    }

    );
  }

  openDialog() {
    this.dialog.open(MainModalComponent ,{
      disableClose: true,
    });
  }

}
