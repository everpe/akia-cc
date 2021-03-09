import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Shop} from '../models/shop';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ShopService {
  
  apiURL='http://localhost:8000/api/shops';

  constructor(private httpClient: HttpClient) { }

  /**
   * Consulta todas las tiendas de Akia
   */
   public listAllShops(): Observable<Shop[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<Shop[]>(this.apiURL).pipe(
      map((shops: Shop[])=>{
        return shops;
      })
    )
  }


}
