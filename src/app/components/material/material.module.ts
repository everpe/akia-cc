import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {CustomMatPaginatorIntl} from '../../paginator-es';
import {MatDialogModule} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  exports:[
    MatPaginatorModule,
    MatDialogModule,
    MatTableModule
  ]
})
export class MaterialModule { }
