import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {
  @Input() placeholdertext: string;
  @Input() inputValue: any;
  @Output() outputValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.outputValue.emit(this.inputValue);
  }

  onChange(){
    this.outputValue.emit(this.inputValue);
  }

}
