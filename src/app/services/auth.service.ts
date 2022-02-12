import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDTO } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NewUser } from '../model/new-user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authURL = environment.endpointManager;

  constructor(private httpClient: HttpClient) { }

  public new(newUser: NewUser): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/auth/nuevo', newUser);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDTO> {
    return this.httpClient.post<any>(this.authURL + '/auth/login', loginUsuario);
  }

  public refresh(dto: JwtDTO): Observable<JwtDTO> {
    return this.httpClient.post<any>(this.authURL + '/auth/refresh', dto);
  }
}
