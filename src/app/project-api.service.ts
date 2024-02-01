import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; 



@Injectable({
  providedIn: 'root'
})
export class ProjectApiService {

  isDarkMode: boolean = false;

  toggleDarkMode(): void {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark-mode', this.isDarkMode);
  }


  url = "https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject";
  url1 = "https://3q7gy5e75i.execute-api.ca-central-1.amazonaws.com/newdev/newuser";
  getUrl = 'https://hv6tu8l99i.execute-api.ca-central-1.amazonaws.com/Dev/newedit';
  

  constructor(private http: HttpClient, private router: Router) { }

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

  // updateProjectData(){
  //   let url4 = 'https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject'
  //   return this.http.put(url4);
  // }

  saveUserData(body:any){
    console.log(body);
    return this.http.post(this.url1,body);
    
  }
  // deleteUser(id:any){
  //     console.log(id);
  //     let url4 = 'https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject'
  //     return this.http.delete(`${url4}/${id}`); 
  // }
  deleteProject(id: any)  {
    let url4 = 'https://erhtgn40k9.execute-api.ca-central-1.amazonaws.com/newdev/newproject'
    const requestBody = { id: id };
    return this.http.request('delete', url4, { body: requestBody });
  }
  deleteUser(id: any) {
    const url = 'https://3q7gy5e75i.execute-api.ca-central-1.amazonaws.com/newdev/newuser';
    const requestBody = { id: id };
    return this.http.request('delete', url, { body: requestBody });
  }

   navigateOnSuccess(): void {
    // You can modify the route or navigate to a different component
    // this.router.navigate(['/user-dir']);
  }
}