import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'; 
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  //bandera para saber si está logueado el admin
  logueado:any=false;
  constructor(private authServiec:AuthService) { 
    this.loggedIn();
  }

  ngOnInit(): void {
  }

  /**
   * Busca el token, para verificar si esta logueado on No 
   */
  public  loggedIn():boolean{
    // console.log('k'+this.authServiec.loggedIn());
    return this.logueado=this.authServiec.loggedIn();
  }

  /**
   * Implementa el logout del servicio
   */
  public logout(){
    let confi=confirm('¿Desea cerrar sesión como Administrador?');
    if(confi)
      this.authServiec.logout();
  }
}
