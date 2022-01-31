import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  constructor(private httpClient: HttpClient) { }

  private API_SERVER = environment.endpointManager;

  public getAllState(): Observable<any>{
    return this.httpClient.get(this.API_SERVER + '/state/getAllState');
  }
}
