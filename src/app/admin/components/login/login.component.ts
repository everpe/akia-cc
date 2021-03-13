import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import {UserLogin} from '../../models/UserLogin';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  // public loginData:any = {
  //   email: '',
  //   password: ''
  // }

  public loginData:UserLogin={}as UserLogin;
  
  constructor(private authService :AuthService) { }

  ngOnInit(){
  }
  
  /**
   * 
   */
  login()
  {
    this.authService.login(this.loginData);
    console.log(this.loginData);
  }
}
