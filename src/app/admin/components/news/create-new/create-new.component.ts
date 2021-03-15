import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';
import {New} from '../../../models/new';
import {Category} from '../../../models/category';
import {NgForm} from '@angular/forms';
import {NewService} from '../../../services/new.service';
import {CategoryService} from '../../../services/category.service';

@Component({
  selector: 'app-create-new',
  templateUrl: './create-new.component.html',
  styleUrls: ['./create-new.component.css']
})
export class CreateNewComponent implements OnInit {
  public new:New={} as New;
  public cat:Category={} as Category;
  file:File;
  categories:Category[]=[];
  // bandera para el disabled button
  categoryId=0;
  constructor(private categoryService:CategoryService,
              private newService:NewService) {
    this.setCategories();
   }

  ngOnInit(): void {
  }

  /**
   * Lista todas las categorias.
   */
  setCategories(){
    this.categoryService.listAllCategories().subscribe((response:any) =>
    {
      this.categories=response.categories;
    },error=>{
      console.log(error);
    }
    );
  }

  /**
   * Selecciona una categoria para la noticia a crear
   * @param categoryForm 
   */
   setCategory(event){
     if(event.target.value!=="-"){
      console.log(event.target.value);
      this.new.category_id=event.target.value;
      this.categoryId=1;
     }else{
      this.categoryId=0;
     }
   }

  createNew(categoryForm:NgForm){
    this.newService.createNew(this.new,this.file).subscribe(
      response=>{
        alert("Noticia Creada Correctamente")
        window.location.reload();
        // this.setCategories();
      },error=>{
        alert("No se pudó crear")
        // console.log(error);
      }
    );
  }

  selectFile(event){
    this.file=event.target.files[0];
    this.new.image=this.file;
    console.log(this.file.name);
  }
}
