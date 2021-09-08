import { Injectable } from '@angular/core';
import { HttpApiService } from '../shared/http-api.service';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private baseUrl = environment.postsApi;

  constructor(private httpObj: HttpApiService) { }

  getPost(url,options) {
    return this.httpObj.getDataFromServer(`${this.baseUrl}${url}`,options);
  }

  getPostById(url,options){
    return  this.httpObj.getDataFromServer(`${this.baseUrl}${url}`,options);
  }

  savePost(url,body,options){
    return  this.httpObj.postDataFromServer(`${this.baseUrl}${url}`,body,options);
  }

  updatePost(url,body,options){
    return  this.httpObj.putDataFromServer(`${this.baseUrl}${url}`,body,options);
  }

  removePost(url,options){
    return  this.httpObj.rmoveDataFromServer(`${this.baseUrl}${url}`,options);
  }

}
