import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //bandera para saber si está logueado el admin
  logueado:any=false;
  constructor() { 
    this.loggedIn();
  }

  ngOnInit(): void {
  }

  public  loggedIn(){
    this.logueado=localStorage.getItem('token-akia') !==  null;
    console.log(this.logueado);
  }
}
