import { Inject ,Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';
import {CategoryService} from '../../admin/services/category.service';
import {ShopService} from '../../admin/services/shop.service';
import {Category} from '../../admin/models/category';
import {Shop} from '../../admin/models/shop';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ShowShopComponent} from '../show-shop/show-shop.component';
@Component({
  selector: 'app-tiendas',
  templateUrl: './tiendas.component.html',
  styleUrls: ['./tiendas.component.css']
})
export class TiendasComponent implements OnInit {

  // MatPaginator Inputs
  length = 100;//totales Items
  page_size:number = 12;//cantidad de items  
  page_number=1;
  pageSizeOptions: number[] = [4, 8, 12, 50];

   // MatPaginator Output
   pageEvent: PageEvent;

  categories:Category[]; 
  shops:Shop[]=[];
  // shops:any=[ 
   
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Zara 1"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 1"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Zara 1"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Arturo Calle 3"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 4"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Juan 5"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 6"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Juan 7"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 8"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Zara 9"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan V 10"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Zara"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan V"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Zara"
  //   }

  // ]
  // scroll
  activeSection = 1;
  // Propiedades del Menu lateral categorias
  public positionCategoriasMenu:string="fixed";
  public topCategorias:string="50%";
  public rutaImagesShops:string='http://localhost:8000/shops/';


  constructor(private pageScrollService: PageScrollService,
                     @Inject(DOCUMENT) private document: any, 
                      private categoryService:CategoryService,
                      private shopService:ShopService,
                      private dialog: MatDialog) {
    this.setShops();    
    this.setCategories();           
  }

  ngOnInit(): void {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '.theEnd',
    });
   }

   /**
    * Define propiedades del MatPaginator
    * @param event 
    */
  handlePage(event:PageEvent){
    this.page_size=event.pageSize;
    // suma uno al indice d pagina xq emppieza en 0
    this.page_number= event.pageIndex + 1;
  }


  /**
   * Le envia la seccion a la que quiere movers y el num para la variable seccionActual
   * @param e 
   * @param i 
   */
  fullPageScroll(e: HTMLElement, i) {
    this.pageScrollService.scroll({
      scrollTarget: e,
      document: this.document
    });
    this.activeSection = i;
  }


  /**
   * Consulta las categorias al service.
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
   * Todas las tiendas de Akia
   */
  setShops(){
    this.shopService.listAllShops().subscribe((response:any) =>
      {
        this.shops=response.shops;
        // console.log(response);
      },error=>{
        console.log(error);
      }
    );
  }

  /**
   *  Lista de tiendas que pertenecen a cierta categoria.
   * @param id
   */
  setShopsCategory(id:string){
    this.categoryService.showShopsByCategory(id).subscribe((response:any) =>
      {
        this.shops=response.shops;
        // console.log(response);
      },error=>{
        console.log(error);
      }
    );
  }

  /**
   * Recibe las tiendas del floating-menu-side
   * @param shopss 
   */
  recibirShopsMenuMobile(shopss :Shop []){
    // console.log('recibe');
    this.shops=shopss;
  }


  /**
   * 
   * @param id_shop Abre dialogo con una tienda en especifico
   */
  showShop(id_shop){
    const dialogRef = this.dialog.open(ShowShopComponent,{
      width: '80%',
      data:{id_shop:id_shop }
    });
    // dialogRef.afterClosed().subscribe(
    //   result => {window.location.reload();}
    // );
    dialogRef.disableClose = true;
  }
}
