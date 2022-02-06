import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-primary',
  templateUrl: './button-primary.component.html',
  styleUrls: ['./button-primary.component.scss']
})
export class ButtonPrimaryComponent implements OnInit {
  @Input() text: string;
  clickCount: number;

  constructor() { }

  ngOnInit(): void {
    this.clickCount = 0;
  }

}
