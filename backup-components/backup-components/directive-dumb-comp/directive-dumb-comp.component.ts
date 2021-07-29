import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-directive-dumb-comp',
  templateUrl: './directive-dumb-comp.component.html',
  styleUrls: ['./directive-dumb-comp.component.css']
})
export class DirectiveDumbCompComponent implements OnInit {
  showHide;
  caseKey;
  @Input() arrVal =[1,2,5,'default']; // input represent - can receive value from parent
  @Input() printUserData = [];

  @Output() sendDataToParent: EventEmitter<any>  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendData(){
    // custom logic
    this.sendDataToParent.emit([1,2,3,4,5,6]);
  }



}
