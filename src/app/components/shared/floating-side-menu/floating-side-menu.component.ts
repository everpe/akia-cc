import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import {Category} from '../../../admin/models/category';
import {Shop} from '../../../admin/models/shop';
import {New} from '../../../admin/models/new';
import {CategoryService} from '../../../admin/services/category.service';
@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-side-menu.component.html',
  styleUrls: ['./floating-side-menu.component.css']
})
export class FloatingSideMenuComponent implements OnInit {
  
  public title:string;
  public letersTitle:string[]=[""];
  // public categorias: string[] = ["Categoria1","Categoria2",
  //                        "Categoria3","Categoria4",
  //                        "Categoria5","Categoria6",
  //                        "Categoria3","Categoria4",
  //                        "Categoria5","Categoria6","Categoria3","Categoria4",
  //                        "Categoria5","Categoria6"];

  @Input() public categories: string[] =[];
 
  // Propiedad Css que se le cambia desde componentes que llamen este menu
  //con valores por defecto
  @Input() position:string='fixed';
  @Input() top:string='300px';

  @Output()propagar = new EventEmitter<Shop[]>();
  @Output()propagar2 = new EventEmitter<New[]>();

  constructor(private categoryService:CategoryService) { 
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

  setEntitiesCategory(id){
    this.categoryService.showShopsByCategory(id).subscribe((response:any) =>
      {
        this.propagar.emit(response.shops);
      },error=>{
        console.log(error);
      }
    );
    // console.log('envia');
    this.categoryService.showNewsByCategory(id).subscribe((response:any) =>
    {
      this.propagar2.emit(response.news);
    },error=>{
      console.log(error);
    });
  }

}
