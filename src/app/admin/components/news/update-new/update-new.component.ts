import { Component, OnInit,Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import {NewService} from '../../../services/new.service';
import {New} from '../../../models/new';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-update-new',
  templateUrl: './update-new.component.html',
  styleUrls: ['./update-new.component.css']
})
export class UpdateNewComponent implements OnInit {
  public not:New={} as New;
  file:File=null;
  constructor(private newService:NewService,
            @Inject(MAT_DIALOG_DATA) public data: any) {


    this.newService.showNew(data.id_new).subscribe((response:any) =>
    {
      this.not=response.noticia;
      console.log(this.not);
    },error=>{
      console.log(error);
    }
  );         
  }

  ngOnInit(): void {
  }

  updateNew(updateForm:NgForm){
    console.log(this.not);
    this.newService.updateNew(this.not,this.file).subscribe(
      response=>{
        alert("Noticia Actualizada Correctamente");
      },error=>{
        alert("No se pudó actualizar")
        // console.log(error);
      }
    );
  }

  /**
   * Selecciona la image de la notitica a actulizarse
   * @param event 
   */
  selectFile(event){
    this.file=event.target.files[0];
    this.not.image=this.file;
    console.log(this.file.name);
  }
}
