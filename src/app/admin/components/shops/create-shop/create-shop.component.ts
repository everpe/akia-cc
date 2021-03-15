import { Component, OnInit } from '@angular/core';
import {Shop} from '../../../models/shop';
import {Category} from '../../../models/category';
import {ShopService} from '../../../services/shop.service';
import {CategoryService} from '../../../services/category.service';
@Component({
  selector: 'app-create-shop',
  templateUrl: './create-shop.component.html',
  styleUrls: ['./create-shop.component.css']
})
export class CreateShopComponent implements OnInit {
  public shop:Shop={} as Shop;
  file:File;
  categoryId=0;
  categories:Category[]=[];
  constructor(private shopService:ShopService,private categoryService:CategoryService) {
    this.setCategories();
   }

  ngOnInit(): void {
  }

  createShop(){
    this.shopService.createShop(this.shop,this.file).subscribe(
      response=>{
        alert("Tienda Creada Correctamente")
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
    this.shop.image=this.file;
    console.log(this.file.name);
  }


  setCategory(event){
    if(event.target.value!=="-"){
     console.log(event.target.value);
     this.shop.category_id=event.target.value;
     this.categoryId=1;
    }else{
     this.categoryId=0;
    }
  }

  /**
   * Lista todas las categorias para el select.
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
}
