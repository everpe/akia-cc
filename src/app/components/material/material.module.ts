import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {CustomMatPaginatorIntl} from '../../paginator-es';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatDialogModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  exports:[
    MatPaginatorModule,
    MatDialogModule
  ]
})
export class MaterialModule { }
