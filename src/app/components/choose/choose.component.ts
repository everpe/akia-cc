import { Component, OnInit,Inject } from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import {EmailService} from '../../admin/services/email.service';
import {ConfigService} from '../../admin/services/config.service';
import {Required} from '../../admin/models/required';
import {environment} from '../../../environments/environment.prod';
@Component({
  selector: 'app-choose',
  templateUrl: './choose.component.html',
  styleUrls: ['./choose.component.css']
})
export class ChooseComponent implements OnInit {
  // El tipo de renta que se le pasa a Rentar por ruta
  public tipoRenta:any;

  //El documentto requistos de Renta q está en servidor
  public rutaDocumentoRequisitos:string='';
  public required:Required={} as Required;
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private emailService:EmailService,
              private configService:ConfigService) {
    this.rutaDocumentoRequisitos=environment.rutaDocumentoRequisitos;            
    this.tipoRenta= this.data.tipoRenta;      
    this.setRequired(); 
  }

  ngOnInit(): void {
    console.log('hola');
    
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

  setRequired(){
    this.configService.getRequired().subscribe((response:any)=>{
      console.log(response.required);
      this.required=response.required;
    },error=>{
      console.log(error);
    });
  }

}
