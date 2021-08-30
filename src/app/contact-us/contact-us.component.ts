import { Component, Inject, OnInit } from '@angular/core';
import { LoggerService } from '../shared/logger.service';
import { DataSharingService } from '../shared/data-sharing.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  str = 'I am not visible now';
  showAlert = true;
  color = 'red';
  defaultVal = ""
  idOfPokemn = 0;
  // private logObj: LoggerService = new LoggerService();
  constructor(private logObj: LoggerService ,
    public sharedData:DataSharingService,
    public httpObj: HttpClient,
     @Inject('uniqueToken') private tokenVal , @Inject('uniqueFunc') private someFunc ) { }

  ngOnInit(): void {
    this.logObj.info('I am inside Contact component');
    console.error(this.tokenVal , ' I Used in Provders');
    this.someFunc()
    // bs - so 1st time run as soon as subscirbe with last set value
    this.sharedData.dataShareSubjectBS.subscribe((val) => {
      this.defaultVal = val;
    })
  }

  getPokemonData(){
      const url = "https://pokeapi.co/api/v2/pokemon/ditto";
      // get
    console.log('1');
      this.httpObj.get(url).subscribe((succ: any ) => {
      // successany
      console.log(succ);
      this.idOfPokemn = succ.id;
    }, (err) => {
      //error
      console.log('2 if erorr');
    });
    console.log('333');
  }


  multByTwo(value){
    // pipe is recommended here
    return Math.random() * 10 + value;

  }

  changeColor() {
    this.color = "blue";
  }

}
