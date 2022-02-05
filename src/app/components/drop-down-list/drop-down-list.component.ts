import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-drop-down-list',
  templateUrl: './drop-down-list.component.html',
  styleUrls: ['./drop-down-list.component.scss']
})
export class DropDownListComponent implements OnInit {
  @Input() list: any;
  @Input() placeholdertext: string;
  @Input() initialData: any;
  isOpenList: boolean = false;
  @Output() itemSelected: EventEmitter<any> = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
    if(this.initialData){
      this.placeholdertext = this.initialData['name'];
      this.itemSelected.emit({id: this.initialData['id'], name: this.initialData['name']});
    }
  }

  ngOnChanges(changes: SimpleChange){
    if(this.initialData){
      this.placeholdertext = this.initialData['name'];
    }
  }

  onOpenList(){
    if(this.isOpenList){
      this.isOpenList = false;
    }
    else{
      this.isOpenList = true;
    }
  }

  onSelectElement(id: number, name: string){
    this.placeholdertext = name;
    this.itemSelected.emit({id, name});
    this.isOpenList = false;
  }

}
