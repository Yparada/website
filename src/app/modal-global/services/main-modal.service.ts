import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainModalComponent } from '../main-modal/main-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  tipo: 'loading' | 'task',
  task: '',
  state: '',
}

@Injectable({
  providedIn: 'root'
})
export class MainModalService {
  loadingReturn: any;

  constructor(
    private dialog: MatDialog) { }

    loading(){
      this.loadingReturn = this.dialog.open(MainModalComponent, {
        disableClose: true,
        data: {
          tipo: 'loading'
        }
      });
    }

    openTask(item: any, states: any){
      this.dialog.open(MainModalComponent, {
        data: {
          tipo: 'task',
          task: item,
          state: states
        }
      })
    }

    closeAll(){
      this.dialog.closeAll();
    }
}
