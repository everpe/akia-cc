import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ShopService} from '../../../services/shop.service';
import {ProductService} from '../../../services/product.service';
import {Product} from '../../../models/product'
import {Shop} from '../../../models/shop'
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog,MatDialogConfig} from '@angular/material/dialog';
import {CreateProductComponent} from '../create-product/create-product.component';
import {environment} from '../../../../../environments/environment.prod';
@Component({
  selector: 'app-table-products',
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.css']
})
export class TableProductsComponent implements OnInit {
  products:Product[]=[];
  displayedColumns: string[] = ['name', 'image', 'created_at', 'updated_at','acciones'];
  //Información  de La Tabla
  dataSource = new MatTableDataSource();
  // dataSource:Category[];
  // public rutaImagesProducts:string='http://localhost:8000/products/';
  public rutaImagesProducts:string='';

  public shop:Shop={} as Shop;

  constructor(private route: ActivatedRoute,
              private shopService:ShopService,
              private dialog: MatDialog,
              private productService:ProductService) { 
    this.rutaImagesProducts=environment.rutaImagesProducts;            
    this.setParameterRouterLink();
  }

  ngOnInit(): void {
  }

  /**
   * Recibe por ruta el id de la Shop dueña de los productos
   */
  setParameterRouterLink():void{
    //Para darle el tipo de pqr que viene derouterLink 
    this.route.queryParams
      .subscribe(params => {
        this.shop.id=params.id_shop;
        this.getAllProducts();
    });
    
  }

  /**
   * Consulta los productos que pertenecen a cierta tienda
   */
  getAllProducts(){
    this.shopService.showProductShop(this.shop.id).subscribe((response:any) =>
        {
          this.products=response.products;
          this.dataSource.data=this.products;
          this.setShop();
          // console.log('prods:'+JSON.stringify(this.products));
        },error=>{
          console.log(error);
        }
      );
  }

/**
 * Define la tienda que tiene a los productos
 */
  setShop(){
    this.shopService.showShop(this.shop.id).subscribe((response:any) =>
    {
      // console.log(params.id_shop);
      this.shop=response.shop;
      console.log(this.shop);
      // console.log('prods:'+JSON.stringify(this.products));
    },error=>{
      console.log(error);
    }
  );
  }


  addProduct(){
    const dialogRef = this.dialog.open(CreateProductComponent,{
      width: '60%',
      data:{id_shop:this.shop.id}//le mada id al Create
    });
    dialogRef.afterClosed().subscribe(
      result => {this.getAllProducts();}
      // result => {window.location.reload();}
    );
    // dialogRef.disableClose = true;
  }


  deleteProduct(id,name){
    let confi=confirm("Seguro de Eliminar producto:"+name);
    if(confi){
      this.productService.deleteProduct(id).subscribe(
        response=>{
          alert('Producto Eliminado Correctamente');
          this.getAllProducts();
        },error=>{
          console.log(error);
        }
      );
    }
  }
}
