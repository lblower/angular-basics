import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpObj: HttpClient) {

   }


   getDataFromServer(url,options?) : Observable<any>{
     return this.httpObj.get(url, options);
   }


   postDataFromServer(url, body, options?){
    return this.httpObj.post(url, body, options);
  }

  putDataFromServer(url, body, options?){
    return this.httpObj.put(url, body, options);
  }

  rmoveDataFromServer(url,options?){
    return this.httpObj.delete(url,options);
  }



}
