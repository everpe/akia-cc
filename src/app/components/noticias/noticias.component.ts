import { Component, OnInit } from '@angular/core';
import {PageEvent} from '@angular/material/paginator';
import {Category} from '../../admin/models/category';
import {New} from '../../admin/models/New';
import {CategoryService} from '../../admin/services/category.service';
import {NewService} from '../../admin/services/new.service';
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
  
  // Propiedades que le transmite al menu lateral de Categorias
  public positionCategoriasMenu:string="fixed";
  public topCategorias:string="200px";
  // Categorias
  categories:Category[]; 
  news:New[]=[];
  public rutaImagesShops:string='http://localhost:8000/news/';
  //  news:any=[ 
    
  //    {
  //      "img":"../../../assets/anoNuevo.png",
  //      "title":"Celebra con nosotros el año nuevo chino",
  //      "description":"Some quick example text to build on the card"+ 
  //                     "title  the card title and make up the bulk of the card's content and make up the bulk of the card's content"+ 
  //                     "the card title and make up the bulk of the card's content.",
  //      "date":"28-02-2021"
  //    },
  //    {
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   },{
  //     "img":"../../../assets/anoNuevo.png",
  //     "title":"Celebra con nosotros el año nuevo chino",
  //     "description":"Some quick example text to build on the card title and make up the bulk of the card's content the card title and make up the bulk of the card's content.",
  //     "date":"28-02-2021"
  //   }
  // ]
  constructor(private categoryService:CategoryService,
              private newService:NewService) {
    this.setCategories(); 
    this.setAllNews();
   }

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

  /**
   * Lista todas las categorias
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
   * Para selecciona categoria desde modo mobile y devuelve las noticias que le pertenecen.
   * @param shopss 
   */
  recibirShopsMenuMobile(news :New []){
    console.log('recibe');
    // this.news=news;
  }

/**
 * Lista todas las noticias
 */
  setAllNews(){
    this.newService.listAllNews().subscribe((response:any) =>
      {
        console.log(response.news);
        this.news=response.news;
      },error=>{
        console.log(error);
      }
    );
  }
}
