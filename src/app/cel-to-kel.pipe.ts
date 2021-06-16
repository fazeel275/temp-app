import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celToKel'
})
export class CelToKelPipe implements PipeTransform {

  transform(value: number): number{
    return value+273.15;
  }

}
