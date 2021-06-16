import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'kelToCel'
})
export class KelToCelPipe implements PipeTransform {

  transform(value: number): number {
    return value-273.15;
  }

}
