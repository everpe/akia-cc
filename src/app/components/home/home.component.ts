import { Component, OnInit } from '@angular/core';
import {NewService} from '../../admin/services/new.service';
import {New} from '../../admin/models/new';
import {Shop} from '../../admin/models/shop';
import {ShopService} from '../../admin/services/shop.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // ruta directorio de imagenes en backend
  public rutaImagesNews:string='http://localhost:8000/news/';
  //Ruta directorio imagenes de tiendas
  public rutaImagesShops:string='http://localhost:8000/shops/';
  // shops:any=[ 
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Zara 1",
  //     "category":"tipo A"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 1",
  //     "category":"tipo B"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Zara 1",
  //     "category":"tipo A"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Juan 5",
  //     "category":"tipo B"
  //   },
  //   {
  //     "img":"../../../assets/tiendaJuanV.png",
  //     "name":"Tienda Juan 6",
  //     "category":"tipo A"
  //   },
  //   {
  //     "img":"../../../assets/tiendaZara.png",
  //     "name":"Tienda Juan 7",
  //     "category":"tipo A"
  //   }
  // ]
  shops:Shop[]=[];
  news:New[]=[];
  // news:any=[
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on",
  //     "img":"../../../assets/noticias/tres.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on"+ 
  //       "the card title and make up the Some quick example text to build on \n"+
  //       "the card title and make the card title and make up the Some quick example text to build on up th",
  //     "img":"../../../assets/anoNuevo.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on"+ 
  //       "the card title and make up the Some quick example text to build on \n",
  //     "img":"../../../assets/anoNuevo.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on",
  //     "img":"../../../assets/noticias/tres.png",
  //     "date":"28/02/2021"
  //   }
  //   ,
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on"+ 
  //       "the card title and make up the Some quick example text to build on \n",
  //     "img":"../../../assets/anoNuevo.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on",
  //     "img":"../../../assets/noticias/tres.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on"+ 
  //       "the card title and make up the Some quick example text to build on \n",
  //     "img":"../../../assets/anoNuevo.png",
  //     "date":"28/02/2021"
  //   },
  //   {
  //     "title":"Año nuevo en Colomnbia",
  //     "description":"ome quick example text to build on \n" +
  //       "the card title and make up the Some quick example text to build on",
  //     "img":"../../../assets/noticias/tres.png",
  //     "date":"28/02/2021"
  //   }

  // ]
  constructor(private newService:NewService,
              private shopService:ShopService) {
    this.setAllNews();
    this.setShops();
   }


  ngOnInit(): void {
  }


  /**
 * Lista las primeras 3 noticias de Akia. 
 */
   setAllNews(){
    this.newService.listAllNews().subscribe((response:any) =>
      {
        this.news=response.news.slice(0,3);
      },error=>{
        console.log(error);
      }
    );
  }

  /**
   * Lista las primeras 6 tiendas de  Akia
   */
   setShops(){
    this.shopService.listAllShops().subscribe((response:any) =>
      {
        this.shops=response.shops.slice(0,6);
      },error=>{
        console.log(error);
      }
    );
  }

}
