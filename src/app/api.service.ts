import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 url = "https://jsonplaceholder.typicode.com/users";  
 urlPost = "https://jsonplaceholder.typicode.com/posts"

constructor(private http: HttpClient) { }

  getList(){
      return this.http.get(this.url);   //to get list 
  }


  singlePost(){
    return this.http.get(this.urlPost);  // to get all post
  }

  validateUser(userName, password){       // to validate user 
    return true;
  }

}
