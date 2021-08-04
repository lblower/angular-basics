import { SimpleChanges, OnInit } from '@angular/core';
import { Component } from '@angular/core';

// decorator @ - is a typescript specific logic
// @pipe -
// @directive -

// use of decorator is to add extra funcationly to ur class
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // meta data property of @component decorator
})
export class AppComponent implements OnInit {

  // life-cyle of a component
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log('2nd Method, automatically called', 'Only called once')
    // this is first mehtod autmoalllcy  excuted when a component is created
  }

    ngOnChanges(changes: SimpleChanges): void {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log('1st Method, automatically called','called every time there is change in INPUT property')
    }

    ngAfterViewInit(): void {
      //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
      //Add 'implements AfterViewInit' to the class.

    }

    ngAfterViewChecked(): void {
      //Called after every check of the component's view. Applies to components only.
      //Add 'implements AfterViewChecked' to the class.


    }

    ngAfterContentInit(): void {
      //Called after ngOnInit when the component's or directive's content has been initialized.
      //Add 'implements AfterContentInit' to the class.

    }
    ngAfterContentChecked(): void {
      //Called after every check of the component's or directive's content.
      //Add 'implements AfterContentChecked' to the class.

    }


  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('I Am destroyed','Do Some clean up if u want to')
  }

}

