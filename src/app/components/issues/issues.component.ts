import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.scss']
})
export class IssuesComponent implements OnInit {
  datos: any[] = []; 

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.loanTaskList();
  }

  loanTaskList(){
    this.taskService.getAllTask().subscribe( resp => {
      this.datos = resp;
      console.log(resp);
    })
  }

}
