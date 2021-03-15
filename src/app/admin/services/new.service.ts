
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


    /**
   * Manda Crear la entidad Noticia
   * solo recibe el nombre ya q es el unico campo
   */
    public createNew(noti:New,file:File): Observable<New>{
      let token=localStorage.getItem('token-akia');
      const headers=  new HttpHeaders({ 'Accept': 'application/json','Authorization': `Bearer ${token}` });
 
      // 'Content-Type': 'multipart/form-data',
      // const headers=this.getCredentials();
      const data: FormData = new FormData();
      data.append('title', noti.title);
      data.append('description', noti.description);
      data.append('image', file);
      data.append('category_id', noti.category_id);

      return this.httpClient.post<New>(this.apiURL,data,{ 'headers': headers }); 
    }

    public deleteNew(id): Observable<any>{
      const headers=this.getCredentials();
      return this.httpClient.delete<any>(this.apiURL+`/`+ `${id}`,{ 'headers': headers }); 
    }
// NO FUNCIONA TIENE PROBLEMAS DE PUT
  public updateNew(noti:New,file:File): Observable<any>{
      // const headers=this.getCredentials();
      let token=localStorage.getItem('token-akia');
      const headers = new HttpHeaders({'Content-Type':'application/json; charset=utf-8','Authorization': `Bearer ${token}` });
      const data: FormData = new FormData();
      data.append('title', noti.title);
      data.append('description', noti.description);
      if(file!=null){
        data.append('image', file);
      }
      
      data.append('category_id', noti.category_id);
      console.log(this.apiURL+`/`+ `${noti.id}`);
      return this.httpClient.put<any>(this.apiURL+`/`+ `${noti.id}`,data,{ 'headers': headers }); 
    }


    
  /**
   * Crea Headers y params necesarios en las requests
   */
  getCredentials():HttpHeaders{
    let token=localStorage.getItem('token-akia');
    return  new HttpHeaders({ 'Accept': 'application/json','Authorization': `Bearer ${token}` });
  }

}
