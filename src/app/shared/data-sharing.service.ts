import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

// this way is tree shakable
// - when u make a build , angualr will check if this services is used inside any component / directive ,
// if not used it will not be a part of final build
@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private sharedData = 'Default value print';
  // if data is there it is reutrned

  // fire event
  // subscribe to event
  dataShareSubject = new Subject(); // when event emit data is there
  dataShareSubjectBS = new BehaviorSubject('Last val');
 // as soon as u subscribe u have the latest value
 // and also will work in next event

  constructor() { }

  setSharedData(value) {
    this.sharedData = value;
    // firing event that value is updated
    this.dataShareSubject.next();
    this.dataShareSubjectBS.next(value);
  }

  getSharedData(){
    return this.sharedData;
  }

}
