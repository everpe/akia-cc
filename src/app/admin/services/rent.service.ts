import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Rent} from '../../admin/models/Rent';

@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiURL='http://localhost:8000/api/rents';
  constructor(private httpClient:HttpClient) { }

  /**
   * Manda crear una solicitud de renta cualquier user puede
   * @param oficio 
   * @param idenCreador 
   * @param idTipoDocumento 
   * @returns 
   */
  public createRent(rent:Rent): Observable<any> {
    // const headerDict = {
    //   'Content-Type': 'application/json',
    //   'Accept': 'application/json'
      
    // }
     
    let headers=new HttpHeaders().set('Content-Type','application/json');
    // 'Access-Control-Allow-Headers': 'Content-Type',
    let json = JSON.stringify(rent);//en este aspecto es mejor spring q laravel jeje
    console.log(json);
    return this.httpClient.post<any>(this.apiURL,json,{headers:headers});
  }

}
