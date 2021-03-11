import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Shop} from '../models/shop';
import {Product} from '../models/product';
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


  /**
   * Consulta una tienda.
   */
  public showShop(id_shop): Observable<Shop> {
    // + `find/tipos/documentos`
    return this.httpClient.get<Shop>(this.apiURL +`/`+ `${id_shop}`).pipe(
      map((shop: Shop)=>{
        return shop;
      })
    )
  }

  /**
   * Muestra los productos de una cierta tienda
   * @param id_shop 
   * @returns 
   */
  public showProductShop(id_shop): Observable<Product[]> {
    // + `find/tipos/documentos`
    return this.httpClient.get<Product[]>(this.apiURL +`/`+ `${id_shop}`).pipe(
      map((products: Product[])=>{
        return products;
      })
    )
  }

  
}
