import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'celToFah'
})
export class CelToFahPipe implements PipeTransform {

  transform(value:number): number{
    return ((9/5)*value)+32;
  }

}
