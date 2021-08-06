import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  counter = 1;
  new2ndProp = 100;
  showComponent = true;
  @ViewChild('htmlElement') htmlElement;

  toggle(){
    this.showComponent = !this.showComponent;
  }

  constructor() { }

  ngOnInit(): void {
    // 1 timr exctured
    // undefine
    console.log("------ ng on init --------------")
    console.log(this.htmlElement,'-------------------');
    console.log("--------------------")
  }

  updateInput(){
    this.counter = this.counter + 1;
  }
  updatenew2ndProp(){

    this.new2ndProp = this.new2ndProp + 1;
  }


  ngAfterContentInit(){
    console.log('Content init');
    console.log("------ content  init --------------")
    console.log(this.htmlElement,'-------------------');
    console.log("--------------------")
  }

  ngAfterContentChecked(){
    console.log('Content Checked');
  }

  ngAfterViewInit(){
    // this methd start hitting once ui is ready to render
    console.log('Viecw init ');
    console.log("-----View init---------------")
    console.log(this.htmlElement,'-------------------',this.htmlElement.nativeElement);

    console.log("--------------------")
  }

  ngAfterViewChecked(){
    // this methd start hitting once ui is 100% sure is rendered
    console.log('Viecw checked ');
  }
}
