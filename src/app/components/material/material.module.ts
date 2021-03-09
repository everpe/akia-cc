import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import {CustomMatPaginatorIntl} from '../../paginator-es';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  exports:[
    MatPaginatorModule
  ]
})
export class MaterialModule { }
