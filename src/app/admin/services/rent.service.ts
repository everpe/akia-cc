import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import{Rent} from '../models/rent';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class RentService {
  apiURL='http://localhost:8000/api/rents';
  constructor(private httpClient:HttpClient) { }



  /**
   * Lista todas las rentas
   * @returns 
   */
  public getAllRents(): Observable<Rent[]> {
    return this.httpClient.get<Rent[]>(this.apiURL).pipe(
      map((rents: Rent[])=>{
        return rents;
      })
    )
  }


  /**
   * Manda crear una solicitud de renta cualquier user puede
   * @param oficio 
   * @param idenCreador 
   * @param idTipoDocumento 
   * @returns 
   */
  public createRent(rent:Rent): Observable<any> {     
    let headers=new HttpHeaders().set('Content-Type','application/json');
    // 'Access-Control-Allow-Headers': 'Content-Type',
    let json = JSON.stringify(rent);//en este aspecto es mejor spring q laravel jeje
    console.log(json);
    return this.httpClient.post<any>(this.apiURL,json,{headers:headers});
  }


  /**
   * Le cambia el estado a una renta de true a False para simular marcarla como
   * resulta la solicitud de renta
   * @param id 
   * @returns 
   */
  public changeState(id): Observable<any>{
    return this.httpClient.get<any>(this.apiURL+`/state/`+ `${id}`);
  }

}
