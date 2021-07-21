import { Component } from '@angular/core';
import userData from './utils/data.json';
// decorator @ - is a typescript specific logic
// @pipe -
// @directive -

// use of decorator is to add extra funcationly to ur class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // meta data property of @component decorator
})
export class AppComponent {
  title = 'basicAngular';
  active = 1;
 // one way binding ts file to html file
  printMeOnHTml = "i am a html or a string to be pritned on html page";
  printMe = "helo";
  showHide = false;
  arrVal = [1,2,3,4,5,67,23,235];
  caseKey = 2224; // switch case

  printUserData = userData; // print this in html only if it's is a array ( or object)


  redClass = false;

  toogleColor(){
    this.redClass = !this.redClass;
  }

  constructor(){
    console.log(userData);
    this.loopPrint();
  }

   // html - to ts file - w.r.t events
  eventHit(){
    alert('I Am A alert from html page ');
  }

  loopPrint(){


  }
  toggleText(){

    if(this.printMe === "helo"){
      this.printMe = "Bye-Bye";
    } else {
      this.printMe = "helo"; // change detection - ts file value is updated and real time html is also updated with latest value
    }
  }

  testcase(key){

      if(key === "1"){

      } else if(key === "2"){

      } else if(key === "3"){

      }
      else if(key === "4"){

      }  else if(key === "5"){

      }  else {

      }



    switch (key) {
      case '1':

        break;
     case '2':

        break;

    case '3':

    break;

    case '4':

    break;

    case '5':

    break;
    default:
        break;
    }


  }
}

