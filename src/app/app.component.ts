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
export class AppComponent {
}

