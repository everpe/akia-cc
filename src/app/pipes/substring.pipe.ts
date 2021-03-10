import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'substring'
})
export class SubstringPipe implements PipeTransform {
  transform(value: string, startIndex?: number, endIndex?: number):any {
      // compruebe si no se proporcionan argumentos y luego devuelva 50 caracteres: comportamiento predeterminado
      if (!startIndex && startIndex != 0) {
         return value.substring(0, 50) + '….';
      }
      //compruebe si solo se proporciona el índice de inicio, luego devuelva la cadena desde el índice de inicio hasta el final
      if (!endIndex && endIndex != 0) {
         return value.substring(startIndex);
      }
      //si se proporcionan ambos, devuelva la cadena entre esos
      return value.substring(startIndex, endIndex) + '…';
  }
}