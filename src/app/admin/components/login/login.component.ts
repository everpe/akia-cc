import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../admin/services/auth.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit 
{
  public loginData = {
    email: '',
    password: ''
  }

  constructor(
    private authService: AuthService,
    private router: Router  
  ) { }

  ngOnInit(): void {
  }
  
  login()
  {
    this.authService.login(this.loginData);

    console.log(this.loginData);
  }
}
