import { Pipe, PipeTransform } from '@angular/core';
import { SuperHeros } from '../pipe-example/pipe-example.component';

@Pipe({
  name: 'flyingHeroPure',
  standalone: true
})
export class FlyingSuperHeroPipe implements PipeTransform {

  transform(value: SuperHeros[]):  SuperHeros[] {
    return value.filter(hero=> hero.canFlyi);
  }

}
