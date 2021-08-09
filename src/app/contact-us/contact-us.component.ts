import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  str = 'I am not visible now';
  showAlert = true;
  color = 'red';
  constructor() { }

  ngOnInit(): void {
  }

  multByTwo(value){
    // pipe is recommended here
    return Math.random() * 10 + value;

  }

  changeColor() {
    this.color = "blue";
  }

}
