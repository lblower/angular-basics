import { Component, OnInit } from '@angular/core';
import { HttpApiService } from '../shared/http-api.service';

@Component({
  selector: 'app-crudoperation',
  templateUrl: './crudoperation.component.html',
  styleUrls: ['./crudoperation.component.css']
})
export class CrudoperationComponent implements OnInit {

  starWarsApiData = null;
  showLoader = false;
  constructor(private customHttpService: HttpApiService) { }

  ngOnInit(): void {
    console.log(this.customHttpService,this.starWarsApiData);

    this.getStartWarsPeoPleInfo();
    this.getStartWarsFilmsInfo();
  }

  // get star wars data
  getStartWarsPeoPleInfo() {
    this.showLoader = true;
    this.customHttpService.getDataFromServer('https://swapi.dev/api/people').subscribe((jsonResponse) => {
    // success case
    // if api headers return status 2xx
    /// this block will run
      if(jsonResponse && jsonResponse['results']){
        this.starWarsApiData = jsonResponse['results'];
      } else {
        // some error code
        // no data code code
      }
      this.showLoader = false;
      console.log(this.starWarsApiData,'classlevel var')

    },(err) =>  {
      this.showLoader = false;
      console.log('here i m in Error block')

      // error handling
      // if api headers return status 4xx  5XX or not 2xx thi s block will run
    })
  }




  getStartWarsFilmsInfo() {
    this.showLoader = true;
    this.customHttpService.getDataFromServer('https://swapi.dev/api/films').subscribe((jsonResponse) => {
      console.log(jsonResponse);
    },(err) =>  {

      console.log('here i m in Error block')
    })
  }


}
