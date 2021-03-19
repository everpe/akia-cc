import { Component, OnInit,Input } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import{Banner} from '../../../admin/models/banner';
import {ConfigService} from '../../../admin/services/config.service';
import {environment} from '../../../../environments/environment.prod';
@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css'],
  providers: [NgbCarouselConfig]
})
export class CarrouselComponent implements OnInit {

  
  // images = [700, 803, 807].map((n) => `https://picsum.photos/id/${n}/900/350`);

  //El padre le define la seccion tiendas o Inicio para la consulta de los banners a pintar
  @Input() public section: string ="";
  @Input() public title: string ="";
  //Directorio del servidor donde estan las imagenes de tipo Banner
  public rutaImagesBanners:string='';
  banners:Banner[]=[]
  bannerRepetido:Banner= {} as Banner;

  constructor(config: NgbCarouselConfig,
              private configService:ConfigService) {
    this.rutaImagesBanners=environment.rutaImagesBanners;
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true; 
  }

  ngOnInit(): void {
    console.log(this.section);
    this.setImages();
  }


  /**
   * Las imagenes que va a pintar dependiendo lo que le envia el padre en Input
   */
  setImages(){
    this.configService.listAllTiendas(this.section).subscribe((response:any) =>
      {
        this.banners=response.banners;

        this.bannerRepetido=this.banners[0];
        this.banners.splice(0, 1);
        // this.banners.;
        console.log(this.banners);
      },error=>{
        console.log(error);
      }
    );
  }

}
