import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isLogged = false;
  isLoginPage: boolean;
  isAdmin = false;

  constructor(
    private router: Router,
    private tokenSevice: TokenService) { }

  ngOnInit(): void {
    this.isLoginPage = false;
    this.isLogged = this.tokenSevice.isLogged();
    this.isAdmin = this.tokenSevice.isAdmin();

    if(this.router.url == '/login'){
      this.isLoginPage = true;
    }
  }

  goLink(url: string){
    window.open(url, "_blank");
  }

  onLogOut(){
    this.tokenSevice.logOut();
  }

  onNavigate(path: string){
    this.router.navigate([path]);
  }

}
