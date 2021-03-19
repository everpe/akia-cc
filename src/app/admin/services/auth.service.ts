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

  public login(data: UserLogin){
    return this.http.post(this.uri + `login`, data).subscribe((response: Login) => 
    {
      localStorage.setItem('token-akia', response.access_token);
      this.router.navigate(['/admin/dashboard']);
    },error=>{
      console.log(error);
    });
  }
  
  logout()
  {
    localStorage.removeItem('token-akia');
    // localStorage.clear();
    this.router.navigate(['/login']);
  }

}
