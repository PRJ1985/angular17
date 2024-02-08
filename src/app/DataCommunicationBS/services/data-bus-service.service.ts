import { Injectable } from '@angular/core';
import { AsyncSubject,  BehaviorSubject,  Observable, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBusServiceService {
  constructor() { }
  // Normal Subject implementation
  private dataSource: Subject<string> = new Subject<string>();
  data: Observable<string> = this.dataSource.asObservable();
  sendData(data: string) {
    this.dataSource.next(data);
  }
  
  //Async Subject implementation
  private asyncSubject: AsyncSubject<string> = new AsyncSubject<string>();
  asyncSubjectData: Observable<string> = this.asyncSubject.asObservable();
  sendasyncData(data: string) {
    this.asyncSubject.next(data);
    console.log("Aync Subject Next() call Data :" +data)
  }
  callCompleteAsyncSubject(){
    this.asyncSubject.complete();
  }

  //Behaivour subject
  private bhaiviourSubject: BehaviorSubject<string> = new BehaviorSubject<string>('This is init value');
  bsData: Observable<string> = this.bhaiviourSubject.asObservable();
  sendBSData(data: string) {
    this.bhaiviourSubject.next(data);
  }
  //ReplaySubject

  private replaySubject  : ReplaySubject<string> = new ReplaySubject<string>();
  rsData: Observable<string> = this.replaySubject.asObservable();
  sendRSData(data: string) {
    this.replaySubject.next(data);
  }
  
}
