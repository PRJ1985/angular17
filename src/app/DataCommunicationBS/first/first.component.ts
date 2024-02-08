import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataBusServiceService } from '../services/data-bus-service.service';
@Component({
  selector: 'app-first',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './first.component.html',
  styleUrl: './first.component.css'
})
export class FirstComponent {
  public  inputVal!: string;
  public  asyncVal!: string;
  public  inputbsVal!: string;
  public  inputrsVal!: string;
  
  constructor( private dataService:DataBusServiceService){

  }
  setDataClicked($event:any){
    this.dataService.sendData(this.inputVal);

  }

  //async
  setAsyncDataClicked($event:any){
    this.dataService.sendasyncData(this.asyncVal);

  }
  completeCallclicked($event:any){
    this.dataService.callCompleteAsyncSubject();

  }

  //behaibour subject impletmentatgion
  setbsDataClicked($event:any){
    this.dataService.sendBSData(this.inputbsVal);

  }
  //replay Subject
  setrsDataClicked($event:any){
    this.dataService.sendRSData(this.inputrsVal);

  }

}
