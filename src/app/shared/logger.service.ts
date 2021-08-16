import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  static objCount = 0;
  constructor() {
    ++LoggerService.objCount;
    console.log('I am a object of Logger Class',LoggerService.objCount);
   }

  info(className: string){
    console.log('I am inside --',className);
  }
}
