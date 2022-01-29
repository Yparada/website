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

  constructor(
    private router: Router,
    private tokenSevice: TokenService) { }

  ngOnInit(): void {
    if(this.tokenSevice.getToken()){
      this.isLogged = true;
    }
    else{
      this.isLogged = false;
    }
  }

  goLink(url: string){
    window.open(url, "_blank");
  }

  onLogOut(){
    this.tokenSevice.logOut();
    this.router.navigate(['/']);

  }

}
