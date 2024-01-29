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
    console.log("body is",body);
    return this.http.post(this.url,body);
  }

  getProjectData(){
    let url2 = 'https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject';
    return this.http.get(url2);
  }

  getUserData(){
    let url3 = 'https://3q7gy5e75i.execute-api.ca-central-1.amazonaws.com/newdev/newuser'
    return this.http.get(url3);
  }

  saveUserData(body:any){
    console.log(body);
    return this.http.post(this.url1,body);
  }

  deleteUser(id:any){
      console.log(id);
      let url4 = 'https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject'
      return this.http.delete(`${url4}/${id}`); 
  }

}
