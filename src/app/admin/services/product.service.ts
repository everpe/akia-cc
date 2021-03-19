import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Product} from '../models/product';
import {environment} from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // apiURL='http://localhost:8000/api/products';
  apiURL='';
  constructor(private httpClient: HttpClient) { 
    this.apiURL=environment.apiURL+'products';
  }

  getCredentials():HttpHeaders{
    let token=localStorage.getItem('token-akia');
    return  new HttpHeaders({ 'Accept': 'application/json','Authorization': `Bearer ${token}` });
  }
  public createProduct(product:Product,file:File): Observable<Product>{
    const headers= this.getCredentials();
    const data: FormData = new FormData();
    data.append('name', product.name);
    data.append('image', file);
    data.append('shop_id', product.shop_id);

    return this.httpClient.post<Product>(this.apiURL,data,{ 'headers': headers }); 
  }

  public deleteProduct(id): Observable<any>{
    const headers=this.getCredentials();
    return this.httpClient.delete<any>(this.apiURL+`/`+ `${id}`,{ 'headers': headers }); 
  }

}
