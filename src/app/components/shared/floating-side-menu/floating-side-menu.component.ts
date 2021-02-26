import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-floating-menu',
  templateUrl: './floating-side-menu.component.html',
  styleUrls: ['./floating-side-menu.component.css']
})
export class FloatingSideMenuComponent implements OnInit {

  public title:string;
  public letersTitle:string[]=[""];
  public categorias: string[] = ["Categoria1","Categoria2",
                         "Categoria3","Categoria4",
                         "Categoria5","Categoria6"];
  constructor() { 
    this.title="Categorias";
    this.chartAtString();
  }

  ngOnInit(): void {
  }

  chartAtString(){
    for(var i=0; i<this.title.length;i++){
      this.letersTitle[i]=this.title.charAt(i);
    }
  }

}
