import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // here we resolve dependency
  // constrcutor will create a object Of class ROUTE
  // behind the scenr = const naviagate = new Route();
  constructor(private navigate: Router  ) { }

  ngOnInit(): void {
  }
  callAfunction(){
    alert('asdasd');
  }

  gotoCoursePage(){
    this.navigate.navigateByUrl('/course')
  }
}
