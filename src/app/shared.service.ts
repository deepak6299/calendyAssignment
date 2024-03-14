import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { feedback } from './data-types';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _http:HttpClient) { }


  // post http request
postData(data:feedback){
  return this._http.post('http://localhost:3000/posts',data)
}

// get http request
fetchData(){
  return this._http.get('http://localhost:3000/posts')
}

// delete http request 
deleteData(id:number){
  return this._http.delete(`http://localhost:3000/posts/${id}`)
}
}
