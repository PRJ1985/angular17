import { Component, OnDestroy } from '@angular/core';
import { DataBusServiceService } from '../services/data-bus-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent implements OnDestroy {
  public receivedData!:string;
  public receivedAsyncData!:string;
  public receivedbsData!:string;
  public receivedrsData!:string;

  refSubject1:Subscription ;
  refSubject2:Subscription ;
  refSubject3:Subscription ;
  refSubject4:Subscription | undefined;
   
  constructor(private dataService:DataBusServiceService){
    //default subject
    this.refSubject1 =  this.dataService.data.subscribe(response => {
      this.receivedData =  response;
    });


    //Asyn Call 
    this.refSubject2 = this.dataService.asyncSubjectData.subscribe(response => {
      this.receivedAsyncData =  response;
    });

     //behaiviour subbject
     this.refSubject3 = this.dataService.bsData.subscribe(response => {
      this.receivedbsData =  response;
    });
  }
  ngOnDestroy(): void {
    this.refSubject1.unsubscribe();
    this.refSubject2.unsubscribe();
    this.refSubject3.unsubscribe();
    if (this.refSubject4)
    {
      this.refSubject4.unsubscribe();
    }

 
  }
 
  subscribeReplaySubject(){ 
    //Replay Subject
    this.refSubject4 = this.dataService.rsData.subscribe(response => {
      this.receivedrsData =  response;
      console.log('Replay On subscribe Val: ' +response);
    });

  }
   

}
