import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';

import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  urlData = null;
  printMe = "I need to be printed";

  iAmFromSubject = "No Event Hit";

  addSomeData = new Subject(); // i need to observe this  || this will fire a event - it only contains current value

  addSomeDataBS = new BehaviorSubject('intial value of bs'); // store last value as well


  // logSer:LoggerService = new LoggerService();

  // here we resolve dependency
  // constrcutor will create a object Of class ROUTE
  // behind the scenr = const naviagate = new Route();
  constructor(private navigate: Router  , public logSer: LoggerService  ) { }

  ngOnInit(): void {
    console.log(this.navigate);
    // u need retive a url and for printing assign it to class level variable
    this.urlData = this.navigate.url;
    this.logSer.info('Login Component loaded');

    // i am suscribed to a subject / OBSERVABLE
    this.addSomeDataBS.subscribe((subData: string) => {
      //success happy case
      this.iAmFromSubject = subData;
      alert('1st ')
    },(err) => {
      // error
        alert('error block');
    },() => {
      // complete
      alert('i will work in error and success as well')
    });

    console.log(this.addSomeDataBS);
  }

  onSubmit(event){
    event.preventDefault();
    alert('Form Submit');
  }

  gotoCoursePage(){
    this.navigate.navigateByUrl('/course');
  }

  subscribeLaterOn(){
    this.addSomeDataBS.subscribe((data) => {
      alert('2nd ');
      alert(data);

  });
  console.log(this.addSomeData);
  }

  alertValueOfSubject(){
    alert(this.addSomeData)
  }

  fireSubject(){
    // success hit
     this.addSomeDataBS.next('i am the last emittedd value');
     // this is a error hit and observable will stop working after this
    // this.addSomeData.error('Error occured');
  }



  fireSubjectSecond(){
    // success hit
     this.addSomeDataBS.next('Latest value now');
     // this is a error hit and observable will stop working after this
    // this.addSomeData.error('Error occured');
  }


  ngOnDestroy(){
    console.log('I M Destoruyed , login component');
  }
}
