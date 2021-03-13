import { Injectable } from '@angular/core';
import { HttpClient,HttpResponse } from '@angular/common/http';
import { UserLogin } from '../models/UserLogin';
import { Login } from '../models/Login';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
const uri = 'http://localhost:8000/api/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{ 

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  public login(data: UserLogin){
    return this.http.post(uri, data).subscribe((response: Login) => 
    {
      localStorage.setItem('token', response.access_token);
      this.router.navigate(['/admin/dashboard']);
    },error=>{
      console.log(error);
    });
  }
  
  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
