import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {EmailService} from '../../admin/services/email.service';
import {ChooseComponent} from '../choose/choose.component';
import {MatDialog,MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'form-habla-con-nosotros',
  templateUrl: './form-habla-con-nosotros.component.html',
  styleUrls: ['./form-habla-con-nosotros.component.css']
})
export class FormHablaConNosotrosComponent implements OnInit {

  // public sendCorreo:Boolean=false;
  // public activeSelect:Boolean=false;
  //1 es enviar correo 2y3 tipos De renta 

  public tipoRenta:number=0;
  constructor(private emailService:EmailService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    // this.openDialogChoose();
  }


  /**
   * Envia Email si es queja o comentario
   * @param hablaForm 
   */
  sendEmail(hablaForm:NgForm){
    
    const email=hablaForm.value;
    console.log(this.tipoRenta);

    //Manda email 
    if( (hablaForm.valid&&this.tipoRenta==1)){
      let confir=confirm('¿Enviar Solicitud via correo electrónico?');
      if(confir){
        this.emailService.sendEmail(email.name,email.email,email.message);
        hablaForm.reset();
        alert('Se ha creado la solicitud');
      }
    }

    if((hablaForm.valid && (this.tipoRenta==2||this.tipoRenta==3))){
      console.log('entra'+this.tipoRenta);
      this.openDialogChoose(hablaForm);
    }
  }


  /**
   * Define desde el select, Si es uno envia correo, 2 manda a crear renta.
   * @param event 
   */
  // setSendCorreo(event){
  //   console.log(event.target.value);
  //   if(event.target.value==1){
  //     this.sendCorreo=true;
  //     this.activeSelect=true;
  //   }
  //   if(event.target.value==2){
  //     this.sendCorreo=false;
  //     this.activeSelect=true;
  //   }
  //   //si envia 0 es porque no selecciono accion del select
  //   if(event.target.value==0){
  //     this.activeSelect=false;
  //   }
  // }


  /**
   * Recibe el form por si seleccionan enviar correo
   * @param 
   */
  openDialogChoose(hablaForm:NgForm){
    const dialogRef = this.dialog.open(ChooseComponent,{
      width: 'auto',
      data:{form:hablaForm,tipoRenta:this.tipoRenta }
    });
    dialogRef.afterClosed().subscribe(
      result => {window.location.reload();}
    );
  }
}
