import { Pipe, PipeTransform } from '@angular/core';
import { FlyingSuperHeroPipe } from './super-hero.pipe';

@Pipe({
  name: 'superHeroImpure',
  standalone: true,
  pure:false
})
 

 
export class SuperHeroImpurePipe extends FlyingSuperHeroPipe {

  

}