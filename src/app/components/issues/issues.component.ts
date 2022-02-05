import { Component, OnInit } from '@angular/core';
import { MainModalService } from 'src/app/modal-global/services/main-modal.service';
import { StateService } from 'src/app/services/state.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  datos: any[] = [];
  StateList: any[] = [];

  constructor(
    private taskService: TaskService,
    private mainModalService: MainModalService,
    private stateService: StateService) { }

  ngOnInit(): void {
    this.mainModalService.loading();
    this.loanTaskList();
    this.mainModalService.closeAll();
  }

  loanTaskList(){
    this.taskService.getAllTask().subscribe( resp => {
      this.datos = resp;
    })
  }

  onClick(elemento: any){
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
    this.loanTaskList();
    // location.reload();

  }

}
