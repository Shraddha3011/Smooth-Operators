import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {
  url = "https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject";
  url1 = "https://3q7gy5e75i.execute-api.ca-central-1.amazonaws.com/newdev/newuser";

  constructor(private http:HttpClient) { }

  saveProjectData(body:any){
    console.log(body);
    return this.http.post(this.url,body);
  }

  getProjectData(){
    return this.http.get(this.url);
  }

  getUserData(){
    return this.http.get(this.url1);
  }

  saveUserData(body:any){
    console.log(body);
    return this.http.post(this.url1,body);
  }
}
