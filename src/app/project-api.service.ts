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


  url = "https://um0xzq5u4f.execute-api.ca-central-1.amazonaws.com/projectDev/projectDir";
  url1 = "https://k5kjv9bne2.execute-api.ca-central-1.amazonaws.com/userDev/userDir";
  getUrl = 'https://hv6tu8l99i.execute-api.ca-central-1.amazonaws.com/Dev/newedit';
idUrl = 'https://3q7gy5e75i.execute-api.ca-central-1.amazonaws.com/newdev/newuser';

  constructor(private http: HttpClient, private router: Router) { }

  saveProjectData(body:any){
    console.log("body is",body);
    return this.http.post(this.url,body);
  }

  getProjectData(){
    let url2 = 'https://um0xzq5u4f.execute-api.ca-central-1.amazonaws.com/projectDev/projectDir';
    return this.http.get(url2);
  }
  
  
  getUserData(){
    let url3 = 'https://k5kjv9bne2.execute-api.ca-central-1.amazonaws.com/userDev/userDir'
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
  deleteProject(id: any)  {
    let url4 = 'https://um0xzq5u4f.execute-api.ca-central-1.amazonaws.com/projectDev/projectDir'
    const requestBody = { id: id };
    return this.http.request('delete', url4, { body: requestBody });
  }
  deleteUser(id: any) {
    const url = 'https://k5kjv9bne2.execute-api.ca-central-1.amazonaws.com/userDev/userDir';
    const requestBody = { id: id };
    return this.http.request('delete', url, { body: requestBody });
  }

   navigateOnSuccess(): void {
    // You can modify the route or navigate to a different component
    // this.router.navigate(['/user-dir']);
  }


  saveproject(body:any){
    let urlnew='https://um0xzq5u4f.execute-api.ca-central-1.amazonaws.com/projectDev/projectDir';
    // let urlnew = 'https://hv6tu8l99i.execute-api.ca-central-1.amazonaws.com/Dev/newedit';
    console.log(body);
    return this.http.put(urlnew,body);
  }
  saveuser(body:any){
    let urlnew='https://k5kjv9bne2.execute-api.ca-central-1.amazonaws.com/userDev/userDir';
    // let urlnew = 'https://hv6tu8l99i.execute-api.ca-central-1.amazonaws.com/Dev/newedit';
    console.log(body);
    return this.http.put(urlnew,body);
  }
  getProjectbyID(id: string): Promise<any> {
      return this.http.get<any>(`${this.idUrl}/${id}`).toPromise();
  }
}