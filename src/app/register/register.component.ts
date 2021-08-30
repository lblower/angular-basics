import { Component, OnInit } from '@angular/core';
import { DataSharingService } from '../shared/data-sharing.service';
import { LoggerService } from '../shared/logger.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  // logSer:LoggerService = new LoggerService();

  sharedDataValue = null;
  constructor(public logSer:LoggerService, public sharedData:DataSharingService) {
    console.log(this.logSer,'Log service object');
  }

  ngOnInit(): void {
    this.logSer.info('Register component')
    // this.sharedDataValue = this.sharedData.getSharedData();
    this.sharedData.dataShareSubject.subscribe(() => {
      this.sharedDataValue = this.sharedData.getSharedData();
    })
  }

}
