import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private httpClient: HttpClient) { }

  private API_SERVER= environment.endpointManager;

  public getAllTask(): Observable<any>{
    return this.httpClient.get(this.API_SERVER+'/task/getAllTask');
  }

  public deleteTask(id: number): Observable<any>{
    return this.httpClient.delete(this.API_SERVER + '/task/deleteTask/'+id);
  }

  public createTask(task: Task): Observable<any>{
    return this.httpClient.post(this.API_SERVER + '/task/createTask', task);
  }

}
