import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-text-area',
  templateUrl: './text-area.component.html',
  styleUrls: ['./text-area.component.scss']
})
export class TextAreaComponent implements OnInit {
  @Input() placeholdertext: string;
  @Input() inputValue: any;
  @Output() outputValue: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.outputValue.emit(this.inputValue);
  }

  onChange(){
    console.log('Valor textArea '+this.inputValue);
    this.outputValue.emit(this.inputValue);
  }

}
