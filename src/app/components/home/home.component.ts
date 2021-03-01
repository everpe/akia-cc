import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  shops:any=[ 
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Zara 1",
      "category":"tipo A"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 1",
      "category":"tipo B"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Zara 1",
      "category":"tipo A"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Juan 5",
      "category":"tipo B"
    },
    {
      "img":"../../../assets/tiendaJuanV.png",
      "name":"Tienda Juan 6",
      "category":"tipo A"
    },
    {
      "img":"../../../assets/tiendaZara.png",
      "name":"Tienda Juan 7",
      "category":"tipo A"
    }
  ]
  news:any=[
    {
      "title":"Año nuevo en Colomnbia",
      "description":"ome quick example text to build on \n" +
        "the card title and make up the Some quick example text to build on",
      "img":"../../../assets/anoNuevo.png",
      "date":"28/02/2021"
    },
    {
      "title":"Año nuevo en Colomnbia",
      "description":"ome quick example text to build on \n" +
        "the card title and make up the Some quick example text to build on"+ 
        "the card title and make up the Some quick example text to build on \n"+
        "the card title and make the card title and make up the Some quick example text to build on up th",
      "img":"../../../assets/anoNuevo.png",
      "date":"28/02/2021"
    },
    {
      "title":"Año nuevo en Colomnbia",
      "description":"ome quick example text to build on \n" +
        "the card title and make up the Some quick example text to build on"+ 
        "the card title and make up the Some quick example text to build on \n",
      "img":"../../../assets/anoNuevo.png",
      "date":"28/02/2021"
    }
  ]
  constructor() { }


  ngOnInit(): void {
  }

}
