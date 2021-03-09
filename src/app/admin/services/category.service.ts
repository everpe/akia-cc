import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../models/category';
import {Shop} from '../models/shop';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  apiURL='http://localhost:8000/api/categories/';
  constructor(private httpClient: HttpClient) { }

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
 *  Busca una categoria y consulta las tiendas que tiene relacionadas
 * @param id_category
 * @returns 
 */
  public showShopsCategory(id_category:string): Observable<Shop[]>{
    return this.httpClient.get<Shop[]>(this.apiURL + id_category).pipe(
      map((shops: Shop[])=>{
        return shops;
      })
    )
  }

}
