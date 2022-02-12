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
  loginUser: LoginUsuario;
  nombreUsuario: string = '';
  password: string = '';
  errorMsj: string;



  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private mainModalService: MainModalService) { }

  ngOnInit(): void {
    this.nombreUsuario = this.tokenService.getUserName();
  }

  onLogin(): void{
    this.mainModalService.loading();
    this.loginUser = new LoginUsuario(this.nombreUsuario, this.password);
    this.authService.login(this.loginUser).subscribe( data => {
      this.tokenService.setToken(data.token);
      this.mainModalService.closeAll();
      this.router.navigate(['/dev']);
    },
    err => {
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
