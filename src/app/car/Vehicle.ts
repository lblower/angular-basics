import { Colors } from '../colors.enum';

export class Vehicle {

  speed: number;
  color: Colors;

  constructor(speed:number , color: Colors){
      this.speed = speed;
      this.color = color;
      console.log('i m in vieched ', speed);
  }

  average() {
    return this.speed * 300;
  }

  printColor(){
    return this.color;
  }


}
