import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theory',
  templateUrl: './theory.component.html',
  styleUrls: ['./theory.component.css']
})
export class TheoryComponent implements OnInit {
// dumb or presentational component

value = "I Am used in Pipe";

todaysDate = new Date();

constructor() {
  console.log(this.todaysDate);

}

  ngOnInit(): void {
  }

  checkVale(){
    console.log(this.value);
  }

}
