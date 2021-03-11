import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserLogin } from '../models/UserLogin';
import { Login } from '../models/Login';

const uri = 'http://localhost:8000/api/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService 
{ 

  constructor(
    private http: HttpClient,
  ) { }

  login(data: UserLogin)
  {
    this.http.post(uri, data).subscribe((response: Login) => {
      localStorage.setItem('token', response.access_token);
      console.log(response);
    });
  }

}
