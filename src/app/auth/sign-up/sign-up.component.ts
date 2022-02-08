import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';
import { MainModalComponent } from 'src/app/modal-global/main-modal/main-modal.component';
import { MainModalService } from 'src/app/modal-global/services/main-modal.service';
import { NewUser } from 'src/app/model/new-user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SingUpComponent implements OnInit {
  isRegister = false;
  isRegisterFail= false;
  newUser: NewUser;
  nombreUsuario: string = '';
  password: string = '';
  name: string = '';
  email: string = '';
  errorMsj: string;
  isLogged = false;



  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private mainModalService: MainModalService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }
  }

  onRegister(): void{
    this.mainModalService.loading();
    this.newUser = new NewUser(this.name, this.nombreUsuario, this.email, this.password);
    this.authService.new(this.newUser).subscribe( data => {
      this.isRegister = true;
      this.isRegisterFail = false;

      this.mainModalService.closeAll();
      this.router.navigate(['/login']);
    },
    err => {
      this.isRegister = false;
      this.isRegisterFail = true;
      this.mainModalService.closeAll();
      console.log(err);
      console.log(err.error.mensaje);
    }

    );
  }

  onOutputUser(user: string){
    this.nombreUsuario = user;
  }

  onOutputPassword(password: string){
    this.password = password;
  }

  onOutputName(name: string){
    this.name = name;
  }

  onOutputEmail(email: string){
    this.email = email;
  }

}
