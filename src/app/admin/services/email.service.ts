import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,HttpHeaders,HttpResponse,HttpParams   } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class EmailService {

  // urlFormspree='https://formspree.io/f/xwkwgbyo';
  urlFormspree='';
  constructor(private httpClient: HttpClient) { 
    this.urlFormspree=environment.urlFormspree;
  }

  public sendEmail(name,reply_to,message){
    console.log('llega'+name+reply_to,message);
      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      this.httpClient.post(this.urlFormspree,
        { name: name, replyto: reply_to, message: message },
        { 'headers': headers }).subscribe(
          response => {
            console.log(response);
          },error=>{
            console.log(error);
          }
        );
  }
}
