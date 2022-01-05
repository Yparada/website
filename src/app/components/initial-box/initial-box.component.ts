import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-box',
  templateUrl: './initial-box.component.html',
  styleUrls: ['./initial-box.component.scss']
})
export class InitialBoxComponent implements OnInit {

  msj: string=`This page is under construction, at the moment it does not have a different purpose to learn about development.
  My personal interests are lang programming as Java (Spring boot), TypeScript (Angular), Nodejs, Git, Github, Github Actions, Aws and others related tools`;

  constructor() { }

  ngOnInit(): void {
  }

}
