import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
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
