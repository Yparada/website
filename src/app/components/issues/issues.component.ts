import { Component, OnInit } from '@angular/core';
import { MainModalService } from 'src/app/modal-global/services/main-modal.service';
import { StateService } from 'src/app/services/state.service';
import { TaskService } from 'src/app/services/task.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  datos: any[] = [];
  StateList: any[] = [];
  roles: string[];
  isAdmin = false;

  constructor(
    private taskService: TaskService,
    private mainModalService: MainModalService,
    private stateService: StateService,
    private tokenService: TokenService) { }

  ngOnInit(): void {
    this.mainModalService.loading();
    this.loanTaskList();
    this.mainModalService.closeAll();
    this.roles = this.tokenService.gerAuthorities();
    this.roles.forEach( rol => {
      if(rol === 'ROLE_ADMIN'){
        this.isAdmin = true;
      }
    })
  }

  loanTaskList(){
    this.taskService.getAllTask().subscribe( resp => {
      this.datos = resp;
    })
  }

  onEdit(elemento: any){
    if(this.StateList.length == 0){
      this.mainModalService.loading();
      this.stateService.getAllState().subscribe(resp => {
        this.StateList = resp;
        this.mainModalService.closeAll();
        this.mainModalService.openTask(elemento, this.StateList);
      },
      error => {
        this.mainModalService.closeAll();
      }
      )
    }
    else{
      this.mainModalService.openTask(elemento, this.StateList);
    }

  }

  onDelete(id: number){
    this.taskService.deleteTask(id).subscribe( resp => {
    });
    this.datos = [];
    setTimeout( () => {
      this.loanTaskList();
    }, 1000);
  }

  onCreate(){
    if(this.StateList.length == 0){
      this.mainModalService.loading();
      this.stateService.getAllState().subscribe(resp => {
        this.StateList = resp;
        this.mainModalService.closeAll();
        let a = JSON.stringify(this.StateList);
        this.mainModalService.createTask(this.StateList)
      },
      error => {
        this.mainModalService.closeAll();
      }
      )
    }
    else{
      this.mainModalService.createTask(this.StateList);
    }

  }

}
