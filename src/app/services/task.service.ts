import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  private API_SERVER= 'http://168.138.94.107:8080/task/';

  public getAllTask(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+'getAllTask');
  }
}
