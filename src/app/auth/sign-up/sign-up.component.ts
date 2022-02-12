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
  isNameContent: boolean;
  isUserContent: boolean;
  isPasswordContent: boolean;
  isEmailContent: boolean;



  constructor(
    private tokenService: TokenService,
    private authService: AuthService,
    private router: Router,
    private mainModalService: MainModalService) { }

  ngOnInit(): void {
    this.isEmailContent = false;
    this.isNameContent = false;
    this.isUserContent = false;
    this.isPasswordContent = false;
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
    if(user){
      this.isUserContent = true;
    }
    else{
      this.isUserContent = false;
    }
    this.nombreUsuario = user;
  }

  onOutputPassword(password: string){
    if(password){
      this.isPasswordContent = true;
    }
    else{
      this.isPasswordContent = false;
    }
    this.password = password;
  }

  onOutputName(name: string){
    if(name){
      this.isNameContent = true;
    }
    else{
      this.isNameContent = false;
    }
    this.name = name;
  }

  onOutputEmail(email: string){
    if(email){
      this.isEmailContent = true;
    }
    else{
      this.isEmailContent = false;
    }
    this.email = email;
  }

}
