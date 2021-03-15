import { Component, OnInit,Inject } from '@angular/core';
import {Product} from '../../../models/product';
import {ProductService} from '../../../services/product.service';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  file:File;
  public product:Product={} as Product;
  constructor(private productService:ProductService,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  createProduct(){
    this.product.shop_id=this.data.id_shop;
    console.log(this.product);
    this.productService.createProduct(this.product,this.file).subscribe(
      response=>{
        alert("Producto Creado Correctamente")
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
    this.product.image=this.file;
    console.log(this.file.name);
  }
}
