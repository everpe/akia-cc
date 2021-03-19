import { Component, OnInit,ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// import {Sort, MatSort} from '@angular/material/sort';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {Shop} from '../../../models/shop';
import {ShopService} from '../../../services/shop.service';
import {CreateShopComponent} from '../create-shop/create-shop.component';
import {environment} from '../../../../../environments/environment.prod';
@Component({
  selector: 'app-table-shops',
  templateUrl: './table-shops.component.html',
  styleUrls: ['./table-shops.component.css']
})
export class TableShopsComponent implements OnInit {
  public shops:Shop[]=[];
  //Columnas de la Tabla
  displayedColumns: string[] = ['name', 'image','web_site', 'cellphone_one', 'attention_schedule','acciones'];
  //Información  de La Tabla
  dataSource = new MatTableDataSource();
  // dataSource:Category[];
  // public rutaImagesShops:string='http://localhost:8000/shops/';
  public rutaImagesShops:string='';

  constructor(private shopService:ShopService,
            private dialog: MatDialog) { 
    this.rutaImagesShops=environment.rutaImagesShops;
    this.getAllShops();
    
  }

  ngOnInit(): void {
  }

   /**
   * Lista todas las tiendas
   */
    getAllShops(){
      this.shopService.listAllShops().subscribe((response:any) =>
      {
        this.shops=response.shops;
        this.dataSource.data=this.shops;
      },error=>{
        console.log(error);
      }
      );
    }


    /**
   * Agregar una nueva Tienda
   */
     addShop(){
      const dialogRef = this.dialog.open(CreateShopComponent,{
        width: '60%'
      });
      dialogRef.afterClosed().subscribe(
        result => {this.getAllShops();}
        // result => {window.location.reload();}
      );
      this.getAllShops()
      // dialogRef.disableClose = true;
    }
  
  
    deleteNew(id,name){
      let confi=confirm("Seguro de Eliminar tienda:"+name+
      "Si elimina una tienda eliminará también sus productos");
      if(confi){
        this.shopService.deleteNew(id).subscribe(
          response=>{
            alert('Tienda Eliminada Correctamente');
            this.getAllShops();
          },error=>{
            console.log(error);
          }
        );
      }
    }  
}
