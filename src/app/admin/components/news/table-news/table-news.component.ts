import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {Sort, MatSort} from '@angular/material/sort';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {New} from '../../../models/new';
import {NewService} from '../../../services/new.service';
import {CreateNewComponent} from '../create-new/create-new.component';
// import {UpdateNewComponent} from '../update-new/update-new.component';

@Component({
  selector: 'app-table-news',
  templateUrl: './table-news.component.html',
  styleUrls: ['./table-news.component.css']
})
export class TableNewsComponent implements OnInit {

  public news:New[]=[];
  //Columnas de la Tabla
  displayedColumns: string[] = ['title', 'description', 'image', 'create_at','category','acciones'];
  //Información  de La Tabla
  dataSource = new MatTableDataSource();
  // dataSource:Category[];
  public rutaImagesNews:string='http://localhost:8000/news/';

  constructor(private newService:NewService,
              private dialog: MatDialog) { 
    this.getAllNews();
  }

  ngOnInit(): void {
  }

  /**
   * Lista todas las noticias
   */
  getAllNews(){
    this.newService.listAllNews().subscribe((response:any) =>
    {
      this.news=response.news;
      this.dataSource.data=this.news;
    },error=>{
      console.log(error);
    }
    );
  }


  /**
   * Agregar una nueva noticia
   */
  addNew(){
    const dialogRef = this.dialog.open(CreateNewComponent,{
      width: '60%'
    });
    dialogRef.afterClosed().subscribe(
      result => {this.getAllNews();}
      // result => {window.location.reload();}
    );
    // dialogRef.disableClose = true;
  }


  deleteNew(id,name){
    let confi=confirm("Seguro Eliminar noticia:"+name);
    if(confi){
      this.newService.deleteNew(id).subscribe(
        response=>{
          alert('Noticia Elinada Correctamente');
          this.getAllNews();
        },error=>{
          console.log(error);
        }
      );
    }
    
  }
//El editar en el futuro 
  // updateNew(id_new){
  //   const dialogRef = this.dialog.open(UpdateNewComponent,{
  //     width: '60%',
  //     data:{id_new:id_new}
  //   });
  // }

}
