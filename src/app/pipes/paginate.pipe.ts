import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array: any[],page_size:any ,page_number:number): any[] {
    if(!array.length)return [];
    // Si all deveulve todos los datos
    if(page_size==='all'){
      return array;
    }
    // igual al tamaño que se le envide elemenots por  página
    // sino por defectto van 10
    page_size=page_size || 10;
    page_number=page_number||1;
    --page_number;
    // A partir de los 10 elemento cojer otros 10
    return array.slice( page_number * page_size , (page_number+1)*page_size);
  }

}
