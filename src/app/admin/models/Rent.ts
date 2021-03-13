export interface Rent {
   
    name:string;
    cellphone:string;
    email?:string;
    turn_number:string;//numero giro comercial
    franchise_number?:string;//Nombre de la franquicia error de nombre
    square_meters_required?:string;
    type?:string;
    state?:boolean;
    created_at?:any;
}