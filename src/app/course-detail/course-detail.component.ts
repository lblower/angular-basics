import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  counter = 1;
  new2ndProp = 100;
  showComponent = true;

  toggle(){
    this.showComponent = !this.showComponent;
  }

  constructor() { }

  ngOnInit(): void {
  }

  updateInput(){
    this.counter = this.counter + 1;
  }
  updatenew2ndProp(){

    this.new2ndProp = this.new2ndProp + 1;
  }

}
