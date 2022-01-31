import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../services/main-modal.service';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  id: number;
  title: string;
  desc: string;
  state: any;
  idState: number;
  nameState: string;

  ngOnInit(): void {
    let dato = JSON.stringify(this.data.task);
    try{
      let desc = JSON.parse(dato)['description'];
      let title = JSON.parse(dato)['title'];
      let id = JSON.parse(dato)['id'];
      this.desc = desc;
      this.title = title;
      this.id = id;
    }
    catch{

    }

  }

  modify(){

  }

}
