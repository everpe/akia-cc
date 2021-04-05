import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Category} from '../../../admin/models/category';
import {Shop} from '../../../admin/models/shop';
import {New} from '../../../admin/models/new';
import {CategoryService} from '../../../admin/services/category.service';
import {ShopService} from '../../../admin/services/shop.service';
import {NewService} from '../../../admin/services/new.service';
@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-side-menu.component.html',
  styleUrls: ['./floating-side-menu.component.css']
})
export class FloatingSideMenuComponent implements OnInit {
  
  public title:string;
  public letersTitle:string[]=[""];
  @Input() public categories: string[] =[];
 
  // Propiedad Css que se le cambia desde componentes que llamen este menu
  //con valores por defecto
  @Input() position:string='fixed';
  @Input() top:string='300px';

  @Output()propagar = new EventEmitter<Shop[]>();
  @Output()propagar2 = new EventEmitter<New[]>();

  constructor(private categoryService:CategoryService,
              private shopService:ShopService,
              private newService:NewService) { 
    this.title="Categorias";
    this.chartAtString();
    this.position="fixed";
    this.top="200px";
  }

  ngOnInit(): void {
  }

  /**
   * Muestra el titulo en vertical
   */
  chartAtString(){
    for(var i=0; i<this.title.length;i++){
      this.letersTitle[i]=this.title.charAt(i);
    }
  }
  getColor(){
    return "red";
  }




  /**
   * Lista todas las Shops y todas las News 
   */
  setAllEntitiesCategory(){
    this.shopService.listAllShops().subscribe((response:any)=>{
      this.propagar.emit(response.shops);
    },error=>{
      console.log(error);
    });
    this.newService.listAllNews().subscribe((response:any)=>{
      this.propagar2.emit(response.news);
    },error=>{
      console.log(error);
    });
  }
  /**
   * Define las tiendas y las noticias por id de Categoria a la que corresponden y
   * se las envia al componente padre
   * @param id 
   */
  setEntitiesCategory(id){
    this.categoryService.showShopsByCategory(id).subscribe((response:any) =>
      {
        this.propagar.emit(response.shops);
      },error=>{
        console.log(error);
      }
    );

    this.categoryService.showNewsByCategory(id).subscribe((response:any) =>
    {
      this.propagar2.emit(response.news);
    },error=>{
      console.log(error);
    });
  }

}
