import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
// import {New} from '../../../models/new';
import {ConfigService} from '../../../admin/services/config.service';
import {Banner} from '../../models/banner';
import {CategoryService} from '../../../admin/services/category.service';
import {Category} from '../../../admin/models/category';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  imagesBannerTiendas:Banner[]=[];
  imagesBannerInicio:Banner[]=[];
  public rutaImagesBanners:string='http://localhost:8000/banners/';

  //Nuevo Banner
  categories:Category[]=[];
  file:File;
  public banner:Banner={} as Banner;
  sectionBandera=0;

  //Requisitos para descargar al rentar
  requisito:File;
  constructor(private configService:ConfigService) { 
    this.setImagesTiendas();
    this.setImagesInicio();
  }

  setImagesTiendas(){
    this.configService.listAllTiendas("tiendas").subscribe((response:any) =>
    {
      console.log(response.banners);
      this.imagesBannerTiendas=response.banners;// as Rent[]
    },error=>{
      console.log(error);
    });

  }
  setImagesInicio(){
    this.configService.listAllTiendas("inicio").subscribe((response:any) =>
    {
      console.log(response.banners);
      this.imagesBannerInicio=response.banners;// as Rent[]
    },error=>{
      console.log(error);
    });
  }

  ngOnInit(): void {
  }

  /**
   * Manda a desactivar un banner representado por imagen
   * @param id_banner 
   */
  desactiveImage(id_banner){
    console.log(id_banner);
    let confi=confirm("¿Desea eliminar la imagen?");
    if(confi){
      this.configService.desactiveBanner(id_banner).subscribe(
        response=>{
          console.log(response);
          this.setImagesTiendas();
          this.setImagesInicio();
        },error=>{

        }
      );
      alert("Imagen eliminada de la sección")
    }
  }


  /**
   * Seccion de el Banner a crear (Tiendas - Inicio)
   * @param event 
   */
  setSection(event){
    if(event.target.value!=="-"){
    //  console.log(event.target.value);
     this.banner.section=event.target.value;
     this.sectionBandera=1;
    }else{
     this.sectionBandera=0;
    }
  }

  /**
   * El file de imagen de Banner
   * @param event 
   */
  selectFile(event){
    this.file=event.target.files[0];
    this.banner.path_image=this.file;
    // console.log(this.file.name);
  }


  /**
   * Imagen Banner de seccion tiendas o Inicio
   */
  createBanner(){
    this.configService.createBanner(this.banner,this.file).subscribe(
      response=>{
        // console.log(response);
        alert("Imagen De Banner Creada Correctamente");
        window.location.reload();
      },error=>{
        alert("nos se pudó crear intenta nuevamente")
        window.location.reload();
      }
    );
  }

  /**
   * Selecciona el documento para descarga de requisitos al rentar
   */
  selectRequired(event){
    this.requisito=event.target.files[0];
    // this.banner.path_image=this.file;
  }

  createRequired(){
    this.configService.createRequired(this.requisito).subscribe(
      response=>{
        alert("Se ha establecido el documento de Requisitos");
        console.log(response);
        window.location.reload();
      },error=>{
        console.log(error);
        window.location.reload();
      }
    );
  }
}
