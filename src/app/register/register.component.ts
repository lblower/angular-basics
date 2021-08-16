import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // logSer:LoggerService = new LoggerService();


  constructor(public logSer:LoggerService) {
    console.log(this.logSer,'Log service object');
  }

  ngOnInit(): void {
    this.logSer.info('Register component')
  }

}
