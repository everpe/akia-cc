import { Component, OnInit } from '@angular/core';
import {NewService} from '../../admin/services/new.service';
import{New} from '../../admin/models/new';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-show-new',
  templateUrl: './show-new.component.html',
  styleUrls: ['./show-new.component.css']
})
export class ShowNewComponent implements OnInit {
  public new:New={} as New;
// Directorio imagenes noticias
  public rutaImagesNews:string='http://localhost:8000/news/';
  constructor(private newService:NewService,
              private route: ActivatedRoute) { 
    this.setParameterRouterLink();

  }

  ngOnInit(): void {
  }

  click(){
    console.log('click');
  }

/**
 * Recibe el ide de la noticia por ruta
 */
  setParameterRouterLink():void{
    //Para darle el tipo de pqr que viene derouterLink 
    this.route.queryParams
      .subscribe(params => {
        this.newService.showNew(params.id_new).subscribe((response:any) =>
        {
          this.new=response.noticia;
          console.log('acaaa:'+params.id_new+response.noticia.id);
        },error=>{
          console.log(error);
        }
      );
        // this.idTipoDoc=params.idTipoDoc;
      });
  }

}
