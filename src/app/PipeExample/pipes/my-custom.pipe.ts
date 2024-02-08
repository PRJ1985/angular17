import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myCustom',
  standalone: true
})
export class MyCustomPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string {
    let result = ''
    if(typeof args[1] ===  'object'){
    let obj :Object= args[1] as Object;
   
    for (const a in obj)
    {
       
       
      result= result + a +" "+ args[2] + obj[a as keyof typeof obj]  +"     "  ;  
    }
  }
    return result;
  }

}
