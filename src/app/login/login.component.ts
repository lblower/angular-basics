import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  urlData = null;
  printMe = "I need to be printed";

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
  }

  onSubmit(event){
    event.preventDefault();
    alert('Form Submit');
  }

  gotoCoursePage(){
    this.navigate.navigateByUrl('/course');
  }

  ngOnDestroy(){
    console.log('I M Destoruyed , login component');
  }
}
