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

      /**
   * Manda Crear la entidad Noticia
   * solo recibe el nombre ya q es el unico campo
   */
       public createShop(shop:Shop,file:File): Observable<Shop>{
        // 'Content-Type': 'multipart/form-data',
        const headers=this.getCredentials();
        const data: FormData = new FormData();
        data.append('name', shop.name);
        data.append('web_site',shop.web_site);
        data.append('cellphone_one', shop.cellphone_one);
        data.append('location', shop.location);
        data.append('attention_schedule', shop.attention_schedule);
        data.append('category_id', shop.category_id);
        data.append('image', file);

        return this.httpClient.post<Shop>(this.apiURL,data,{ 'headers': headers }); 
      }
  
      public deleteNew(id): Observable<any>{
        const headers=this.getCredentials();
        return this.httpClient.delete<any>(this.apiURL+`/`+ `${id}`,{ 'headers': headers }); 
      }
    /**
   * Crea Headers y params necesarios en las requests
   */
     getCredentials():HttpHeaders{
      let token=localStorage.getItem('token-akia');
      return  new HttpHeaders({ 'Accept': 'application/json','Authorization': `Bearer ${token}` });
    }
    
}
