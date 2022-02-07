import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { MainModalComponent } from 'src/app/modal-global/main-modal/main-modal.component';
import { MainModalService } from 'src/app/modal-global/services/main-modal.service';

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
    private mainModalService: MainModalService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLoginFail = false;
      this.roles = this.tokenService.gerAuthorities();
    }
  }

  onLogin(): void{
    this.mainModalService.loading();
    this.loginUser = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUser).subscribe( data => {
      this.isLogged = true;
      this.isLoginFail = false;

      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);
      this.roles = data.authorities;
      this.mainModalService.closeAll();
      this.router.navigate(['/dev']);
    },
    err => {
      this.isLogged = false;
      this.isLoginFail = true;
      this.mainModalService.closeAll();
      console.log(err);
    }

    );
  }

  onOutputUser(user: string){
    this.nombreUsuario = user;
  }

  onOutputPassword(password: string){
    this.password = password;
  }

}
