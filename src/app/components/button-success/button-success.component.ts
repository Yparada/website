import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-success',
  templateUrl: './button-success.component.html',
  styleUrls: ['./button-success.component.scss']
})
export class ButtonSuccessComponent implements OnInit {
  @Input() text: string;
  clickCount: number;

  constructor() { }

  ngOnInit(): void {
    this.clickCount = 0;
  }

}
