import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {FrameDialogComponent} from '../../frame-dialog/frame-dialog.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //bandera para saber si está logueado el admin
  logueado:any=false;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  /**
   * Abre dialogo con la ubicación de Akia-cc
   */
  openUbication(){
    const dialogRef = this.dialog.open(FrameDialogComponent,{
      width: 'auto',
      panelClass: 'custom-modal'
      // data:{tipo:this.nombreTipoDoc ,radicado:this.pqrsd.numero_radicado,
      // codigo_qr:this.pqrsd.codigo_qr}
    });
    // dialogRef.afterClosed().subscribe(
    //   result => {window.location.reload();}
    // );
    dialogRef.disableClose = true;

  }


  public  loggedIn():boolean{
    console.log(this.logueado);
    return this.logueado=localStorage.getItem('token-akia') !==  null;
  }

}
