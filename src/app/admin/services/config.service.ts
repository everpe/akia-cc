import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Banner} from '../models/banner';
import {Required} from '../models/required';
import {environment} from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  // apiURL='http://localhost:8000/api';
  apiURL='';
  constructor(private httpClient: HttpClient) { 
    this.apiURL=environment.apiURL;
  }


  /**
   * Documento de requisitos de Renta
   */
  public createRequired(file:File){
    let headers=new HttpHeaders().set('Accept','application/json');
    const data: FormData = new FormData();
      data.append('path_requisitos', file);
    return this.httpClient.post<any>(this.apiURL+`requireds/create/`,data,{headers:headers});
  
  }
/**
 * Esto no lo protegí con Api Token
 * @param rent 
 * @returns 
 */
  public createBanner(banner:Banner,file:File): Observable<any> {     
    let headers=new HttpHeaders().set('Accept','application/json');
    // 'Access-Control-Allow-Headers': 'Content-Type',
    // let json = JSON.stringify(banner);//en este aspecto es mejor spring q laravel jeje
    // console.log(json);

    const data: FormData = new FormData();
      data.append('path_image', file);
      data.append('section', banner.section);
    return this.httpClient.post<any>(this.apiURL+`banners/create/`,data,{headers:headers});
  }
  /**
   * Todas las imagenes del banner por tipo
   * @param tipo 
   * @returns 
   */
  public listAllTiendas(tipo): Observable<Banner[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<any[]>(this.apiURL +`banners/index/`+ `${tipo}`).pipe(
      map((banners: Banner[])=>{
        return banners;
      })
    )
  }


  /**
   * PAsa a false una imagen de banner para simular eliminar
   * @param id 
   * @returns 
   */
  public desactiveBanner(id): Observable<Banner[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<any[]>(this.apiURL +`banners/desactive/`+ `${id}`);
  }


  /**
   * Obtiene el path del servidor donde se ubica el documento de Requisitos
   */
  public getRequired():Observable<Required>{
    return this.httpClient.get<Required>(this.apiURL +`requireds`);
  }
}
