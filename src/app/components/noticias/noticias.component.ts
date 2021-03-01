import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {

   // MatPaginator Inputs
   length = 100;//totales Items
   page_size:number = 12;//cantidad de items  
   page_number=1;
   pageSizeOptions: number[] = [4, 8, 12, 50];
 
    // MatPaginator Output
    pageEvent: PageEvent;
 
   shops:any=[ 
    
     {
       "img":"../../../assets/anoNuevo.png",
       "title":"Celebra con nosotros el año nuevo chino",
       "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
       "date":"28-02-2021"
     },
     {
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    },{
      "img":"../../../assets/anoNuevo.png",
      "title":"Celebra con nosotros el año nuevo chino",
      "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
      "date":"28-02-2021"
    }
  ]
  constructor() { }

  ngOnInit(): void {
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
}
