import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

@Pipe({
  name: 'colorName'

})

export class ColorNamePipe implements PipeTransform {

  transform(value: number): string {
    switch (value) {
      case Color.red:
        return 'Rojo';
      case Color.black:
        return 'Negro';
      case Color.blue:
        return 'Azul';
      case Color.green:
        return 'Verde';
      default:
        return 'Color desconocido';
    }
  }


}
