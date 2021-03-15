import { Component, OnInit } from '@angular/core';
import {RentService} from '../../admin/services/rent.service';
import { ActivatedRoute } from '@angular/router';
import {Rent} from '../../admin/models/rent';

@Component({
  selector: 'app-rentar',
  templateUrl: './rentar.component.html',
  styleUrls: ['./rentar.component.css']
})
export class RentarComponent implements OnInit {

  //2= Renta de locales comerciales
  //3= Renta de espacios publicitarios
  tipoRenta:string='';
  public renta:Rent={} as Rent;

  constructor(private rentService:RentService,
              private route: ActivatedRoute) { 
    this.setParameterRouterLink();            

  }

  ngOnInit(): void {
  }

  /**
   * Recibe el tipo de Renta por url desde Choose
   */
  setParameterRouterLink():void{
    //Para darle el tipo de pqr que viene derouterLink 
    this.route.queryParams
      .subscribe(params => {
        if(params.tipoRenta==2){
          this.tipoRenta='Renta de locales comerciales';
        }else{
          this.tipoRenta='Renta de espacios publicitarios';
        }
    });
  }

  createRent(rentForm:any){
    
    
    this.renta.state=true;
    this.renta.type=this.tipoRenta;
    this.rentService.createRent(this.renta).subscribe(
      response=>{
        alert('Solicitud de Renta Creada Correctamente')
        rentForm.reset();
      },error=>{
          console.log(error);
      }
    );
  }

}
