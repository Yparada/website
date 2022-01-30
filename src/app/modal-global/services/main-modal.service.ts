import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MainModalComponent } from '../main-modal/main-modal.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface DialogData {
  tipo: 'loading';
}

@Injectable({
  providedIn: 'root'
})
export class MainModalService {
  loadingReturn: any;

  constructor(
    public dialog: MatDialog) { }

    loading(){
      this.loadingReturn = this.dialog.open(MainModalComponent, {
        disableClose: true,
        data: {
          tipo: 'loading'
        }
      });
    }

    closeAll(){
      this.dialog.closeAll();
    }
}
