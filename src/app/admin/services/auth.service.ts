import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserLogin } from '../models/UserLogin';
import { Login } from '../models/Login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment.prod';
// const uri = 'http://localhost:8000/api/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{ 
  uri='';
  constructor(private http: HttpClient,private router: Router) {
    this.uri=environment.apiURL;
  }

  /**
   * Inicia sesión
   * @param data 
   * @returns 
   */
  public login(data: UserLogin){
    return this.http.post(this.uri + `login`, data).subscribe((response: Login) => 
    {
      // console.log('login...'+response.access_token)
      if(response.access_token!==undefined && 
        response.access_token!==null){
        localStorage.setItem('token-akia', response.access_token);
        this.router.navigate(['/admin/dashboard']);
      }else{
        alert('Usuarioy/o contraseña Incorrectos');
      }
      
    },error=>{
      console.log(error);
    });
  }
  

  /**
   * Borra el token de LocalStorage
   */
  logout()
  {
    localStorage.removeItem('token-akia');
    // localStorage.clear();
    this.router.navigate(['/home']);
  }


  /**
   * Verifica si esta logueado, chequeandoi el token en localStorage
   * @returns 
   */
  public  loggedIn():boolean{
    return localStorage.getItem('token-akia') !==  null;
  }

}
