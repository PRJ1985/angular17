import { Component } from '@angular/core';
import { MyCustomPipe } from '../pipes/my-custom.pipe';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FlyingSuperHeroPipe } from '../pipes/super-hero.pipe';
import { SuperHeroImpurePipe } from '../pipes/super-hero-impure.pipe';

@Component({
  selector: 'app-pipe-example',
  standalone: true,
  host: {ngSkipHydration: 'true'},
  imports: [MyCustomPipe,FormsModule,CommonModule, FlyingSuperHeroPipe,SuperHeroImpurePipe],
  templateUrl: './pipe-example.component.html',
  styleUrl: './pipe-example.component.css'
})

export class PipeExampleComponent {
  heroName='';
  canFly = true;
  listOfHeros:SuperHeros [ ] = [ ];
  constructor(){
    this.listOfHeros = [
      {name:'Iron MAn',canFlyi:true},
      {name:'Super MAn',canFlyi:true},
      {name:'Thor',canFlyi:false},
    ]
  }

  referenceSameInstance = true;
  addHero(){
    let hero =  new SuperHeros();
    hero.canFlyi =  this.canFly;
    hero.name =this.heroName;
    if(this.referenceSameInstance){
    this.listOfHeros.push(hero)
  }else{
    this.listOfHeros =  this.listOfHeros.concat(hero)
  }

  }

}




export class SuperHeros{
  name:string = '';
  canFlyi:boolean = true;
}