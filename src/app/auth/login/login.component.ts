import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

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
    private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.gerAuthorities();
    }
  }

  onLogin(): void{
    console.log('name :'+this.nombreUsuario);
    console.log('password :'+this.password);
    this.loginUser = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUser).subscribe( data => {
      this.isLogged = true;
      this.isLoginFail = false;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
    },
    err => {
      this.isLogged = false;
      this.isLoginFail = true;
      //this.errorMsj = err.error.message;
      console.log(err);
    }

    );
  }

  onClick(){
    console.log('name :'+this.nombreUsuario);
    console.log('password :'+this.password);
  }

}
