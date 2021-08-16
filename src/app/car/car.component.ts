import { Component, OnInit } from '@angular/core';
import { Vehicle } from './Vehicle';
import { Colors } from '../colors.enum';
import { Engine } from './engine';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent extends Vehicle implements OnInit {
  engineClass:Engine = new Engine("BMW"); // maanul extend , manul injection of a object

  engine2:Engine = new Engine("Maruti");
  // e = new Engine()
  constructor(private e: Engine) {
    super(12,Colors.orange)
    console.log(e,"----33----");
   }

  ngOnInit(): void {

  }

}
