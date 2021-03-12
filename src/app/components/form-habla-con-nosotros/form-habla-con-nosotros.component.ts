import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailService} from '../../admin/services/email.service';
@Component({
  selector: 'form-habla-con-nosotros',
  templateUrl: './form-habla-con-nosotros.component.html',
  styleUrls: ['./form-habla-con-nosotros.component.css']
})
export class FormHablaConNosotrosComponent implements OnInit {

  public sendCorreo:Boolean=false;
  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }


  /**
   * Envia Email si es queja o comentario
   * @param hablaForm 
   */
  sendEmail(hablaForm:NgForm){
    
    const email=hablaForm.value;
    console.log(email.message);
    if( (hablaForm.valid&&this.sendCorreo)&&this.sendCorreo){
      let confir=confirm('¿Enviar Solicitud via correo electrónico?');
      if(confir){
        this.emailService.sendEmail(email.name,email.email,email.message);
        hablaForm.reset();
        alert('Se ha creado la solicitud');
      }
      // console.log(email);
    }
  }


  /**
   * Si es uno envia correo
   * @param event 
   */
  setSendCorreo(event){
    console.log(event.target.value);

    if(event.target.value==1){
      this.sendCorreo=true;
    }
    if(event.target.value==2){
      this.sendCorreo=false;
    }

  }

}
