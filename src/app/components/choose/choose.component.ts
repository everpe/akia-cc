import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmailService} from '../../admin/services/email.service';

@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  // El tipo de renta que se le pasa a Rentar por ruta
  public tipoRenta:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private emailService:EmailService) {
    this.tipoRenta= this.data.tipoRenta;       
  }

  ngOnInit(): void {
  }

  /**
   * Enviar formulario por correo
   */
  enviarPorCorreo(){
    let confir = confirm('¿Enviar Solicitud por correo?');
    if(confir){
      let name = prompt('¿Nombre ?',this.data.form.value.name);
      let message = prompt('¿Mensaje de solicitud ?');
      this.emailService.sendEmail(name,this.data.form.value.email,message);
      console.log('f');
      alert('Se ha creado la solicitud vía correo electrónico');
      window.location.reload();
    } 
    
  }

}
