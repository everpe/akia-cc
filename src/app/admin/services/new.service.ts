
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Category} from '../models/category';
import {New} from '../models/new';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class NewService {

  apiURL='http://localhost:8000/api/news';

  constructor(private httpClient: HttpClient) { }

  /**
   * Consulta todas las tiendas de Akia
   */
   public listAllNews(): Observable<New[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<New[]>(this.apiURL).pipe(
      map((news: New[])=>{
        return news;
      })
    )
  }

/**
 * Muestra Una noticia por su id
 */
  public showNew(id_new): Observable<New> {
    // + `find/tipos/documentos`
    return this.httpClient.get<New>(this.apiURL +`/`+ `${id_new}`).pipe(
      map((noticia: New)=>{
        return noticia;
      })
    )
  }

}
