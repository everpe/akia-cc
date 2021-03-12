import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailService} from '../../admin/services/email.service';
@Component({
  selector: 'form-info-renta',
  templateUrl: './form-info-renta.component.html',
  styleUrls: ['./form-info-renta.component.css']
})
export class FormInfoRentaComponent implements OnInit {

  constructor(private emailService:EmailService) { }

  ngOnInit(): void {
  }

  /**
   * Envía el email de solicitud "info Renta"para q lo contacten y brinden información.
   * @param contactForm 
   */
  sendEmail(contactForm: NgForm){
    const email = contactForm.value;
    if(contactForm.valid){
      this.emailService.sendEmail(email.name,email.email,email.message);
      console.log(email);
      contactForm.reset();
      alert('Se ha enviado la solicitud al correo electrónico');
    }
    
  }
}
