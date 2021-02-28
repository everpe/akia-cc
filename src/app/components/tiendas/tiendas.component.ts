import { Inject ,Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

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

  shops:any=[ 
   
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Zara 1"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 1"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Zara 1"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Arturo Calle 3"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 4"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Juan 5"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 6"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Juan 7"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 8"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Zara 9"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan V 10"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Zara"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan V"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Zara"
    }

  ]

  // scroll
  activeSection = 1;


  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any) {
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



}
