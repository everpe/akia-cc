import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
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
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 1"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Zara 1"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Otra Tienda 2"
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


  constructor() { }

  ngOnInit(): void {
    // // an example array of 150 items to be paged
    // this.items = Array(150).fill(0).map((x, i) => ({ id: (i + 1), name: `Item ${i + 1}`}));
  
  }
  handlePage(event:PageEvent){
    this.page_size=event.pageSize;
    // suma uno al indice d pagina xq emppieza en 0
    this.page_number= event.pageIndex + 1;
  }

}
