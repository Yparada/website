import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from 'src/app/model/task';
import { TaskService } from 'src/app/services/task.service';
import { DialogData } from '../services/main-modal.service';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private taskService: TaskService) { }

  id: number;
  title: string;
  desc: string;
  stateSelected: any;
  titleTask: string;
  descTask: string;
  state: any;
  idState: number;
  nameState: string;
  stateTask: any;
  newTask: Task;

  ngOnInit(): void {
    let task = JSON.stringify(this.data.task);
    let state = JSON.stringify(this.data.state);
    try{

      if(this.data.tipo == 'task'){
        let desc = JSON.parse(task)['description'];
        let title = JSON.parse(task)['title'];
        let id = JSON.parse(task)['id'];
        let stateSelected = JSON.parse(task)['state'];
        let idState = JSON.parse(task)['state']['id'];
        let nameState = JSON.parse(task)['state']['name'];


        this.desc = desc;
        this.title = title;
        this.id = id;
        this.stateSelected = stateSelected;
        this.idState = idState;
        this.nameState = nameState;
      }

      this.titleTask = '';
      this.descTask = '';
      this.state = JSON.parse(state);
      this.newTask = new Task;

    }
    catch{

    }

  }

  modify(){

  }

  itemSelect(item: any){
    this.stateTask = item;
  }

  titleSelect(title: string){
    this.titleTask = title;
  }

  descSelect(desc: string){
    this.descTask = desc;
  }

  onClick(){
    this.newTask.description = this.descTask;
    this.newTask.title = this.titleTask;
    this.newTask.state = this.stateTask;
    this.taskService.createTask(this.newTask).subscribe(resp => {
      let a = JSON.stringify(resp);
      console.log('Crear respuesta ')+resp;
    },
    error => {
      console.log('Error '+error.message);
    });

  }

  onCreateTask(){
    this.newTask.description = this.descTask;
    this.newTask.title = this.titleTask;
    let a = JSON.stringify(this.stateTask)
    console.log('Valor que está incertando '+a);
    this.newTask.state = this.stateTask;
    this.taskService.createTask(this.newTask).subscribe(resp => {
      let a = JSON.stringify(resp);
      console.log('Crear respuesta ')+resp;
      location.reload();
    },
    error => {
      console.log('Error '+error.message);
    });

  }

}
