import { Component, OnInit } from '@angular/core';
import {Rent} from '../../models/rent';
import {MatTableDataSource} from '@angular/material/table';
import {RentService} from '../../../admin/services/rent.service';
@Component({
  selector: 'app-rents',
  templateUrl: './rents.component.html',
  styleUrls: ['./rents.component.css']
})
export class RentsComponent implements OnInit {
  
public rentas:Rent[]=[];
  //Columnas de la Tabla
  // ,'acciones
  displayedColumns: string[] = ['name', 'type','cellphone', 'email','franchise_number',
            'square_meters','created_at','state','acciones'];
  // displayedColumns: string[] = ['name', 'cellphone', 'email'];
  //Información  de La Tabla
  public dataSource = new MatTableDataSource();
  constructor(private rentService:RentService) {
    this.getAllRents();
   }

  ngOnInit(): void {
  }


    /**
   * Lista todas las noticias
   */
    getAllRents(){
      this.rentService.getAllRents().subscribe((response:any) =>
      {
        console.log('si');
        console.log(response.rents);
        this.rentas=response.rents;// as Rent[]
        this.dataSource.data=response.rents;
      },error=>{
        console.log(error);
      });
    }
  
  
    /**
     * Agregar una nueva noticia
     */
    // addNew(){
    //   const dialogRef = this.dialog.open(CreateNewComponent,{
    //     width: '60%'
    //   });
    //   dialogRef.afterClosed().subscribe(
    //     result => {this.getAllNews();}
    //     // result => {window.location.reload();}
    //   );
    //   // dialogRef.disableClose = true;
    // }
  
  
    // deleteNew(id,name){
    //   let confi=confirm("Seguro Eliminar noticia:"+name);
    //   if(confi){
    //     this.newService.deleteNew(id).subscribe(
    //       response=>{
    //         alert('Noticia Elinada Correctamente');
    //         this.getAllNews();
    //       },error=>{
    //         console.log(error);
    //       }
    //     );
    //   }
      
    // }


    /**
     * 
     * @param element Le cambia el estado a la renta para simular que se resolvio
     * @param id 
     * @param element 
     * @param name 
     */
     resolveRent(id,name){
       console.log(id,name);
      alert('Si Marca una solicitud de Renta como resulta no se volverá a listar aquí'); 
      let confi=confirm("¿Actualizar solicitud como Resuelta?");
      if(confi){
        this.rentService.changeState(id).subscribe(
          response=>{
            this.getAllRents();
            console.log(response);
          },error=>{
              console.log(error);
          }
        );
      } 
      
    }
}
