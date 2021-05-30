import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fahToCel'
})
export class FahToCelPipe implements PipeTransform {

  transform(value:number): number{
    return ((value-32)*5)/9;
  }

}
