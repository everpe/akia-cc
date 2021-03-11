import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/UserLogin';
import { Login } from '../models/Login';
import { Router } from '@angular/router';

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

  login(data: UserLogin)
  {
    this.http.post(uri, data).subscribe((response: Login) => {
      localStorage.setItem('token', response.access_token);
      console.log(response);
    });
  }

  logout()
  {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

}
