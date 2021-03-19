import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../models/category';
import {Shop} from '../models/shop';
import {New} from '../models/new';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURL='';
  // apiURL='http://localhost:8000/api/categories/';
  constructor(private httpClient: HttpClient) {
    this.apiURL=environment.apiURL+'categories';
  }
    
  /**
   * Todas las categorias.
   * @returns 
   */
  public listAllCategories(): Observable<Category[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<Category[]>(this.apiURL).pipe(
      map((categories: Category[])=>{
        return categories;
      })
    )
  }

/**
 * Busca una categoria y consulta las tiendas que tiene relacionadas
 * @param id_category
 * @returns 
 */
  public showShopsByCategory(id_category:string): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(this.apiURL + `/`+ id_category).pipe(
      map((shops: Shop[])=>{
        // console.log(shops);
        return shops;
      })
    )
  }

  /**
 * Busca una categoria y consulta las noticias que tiene relacionadas
 * @param id_category
 * @returns 
 */
   public showNewsByCategory(id_category:string): Observable<New[]>{
    return this.httpClient.get<New[]>(this.apiURL+ `/` + id_category).pipe(
      map((news: New[])=>{
        // console.log(news);
        return news;
      })
    )
  }


  /**
   * Manda Crear la entidad categoria
   * solo recibe el nombre ya q es el unico campo
   */
  createCategory(name:string): Observable<Category>{
    const headers = this.getCredentials();
    return this.httpClient.post<Category>(this.apiURL,{name:name},{ 'headers': headers }); 
  }

  /**
   * Actualizar categoria
   * @param id 
   */
  update(id,name){
    const headers = this.getCredentials();
    return this.httpClient.put<Category>(this.apiURL + `/`+ `${id}`,{name:name},{ 'headers': headers }); 
  }

  delete(id,name){
    const headers = this.getCredentials();
    return this.httpClient.delete<Category>(this.apiURL + `/`+ `${id}`,{ 'headers': headers }); 
  }



  /**
   * Crea Headers y params necesarios en las requests
   */
  getCredentials():HttpHeaders{
    let token=localStorage.getItem('token-akia');
    return  new HttpHeaders({ 'Content-Type': 'application/json','Authorization': `Bearer ${token}` });
  }
}
