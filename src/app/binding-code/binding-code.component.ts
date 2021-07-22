import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-binding-code',
  templateUrl: './binding-code.component.html',
  styleUrls: ['./binding-code.component.css']
})
export class BindingCodeComponent implements OnInit {

  @Input() printValueFromApp: string = 'Intail value of this prop'; // u can receive a value from parent component

  @Input() counterVal: number; // recive a value

  @Output() eventHitInParent:EventEmitter<boolean> = new EventEmitter(false); // fire a event


  constructor() { }

  ngOnInit(): void {
  }

  toggleText(){

  }
  eventHit(){
    console.log('I am binding');
    this.eventHitInParent.emit(true)
 // binding component event hie - but i want a method to be called from app.component / from parent
  }

}
