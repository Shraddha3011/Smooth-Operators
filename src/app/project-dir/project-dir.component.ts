import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from '../project-api.service';
@Component({
  selector: 'app-project-dir',
  templateUrl: './project-dir.component.html',
  styleUrls: ['./project-dir.component.css']
})
export class ProjectDirComponent {

 
  accordionItems: any[] = [];

  addItemToAccordion(option: any) {
    this.accordionItems.push(option);
    const indexToRemove = this.unameArray.indexOf(option);
    if (indexToRemove !== -1) {
      this.unameArray.splice(indexToRemove, 1);

    }
    const myFormElement = document.getElementById('select');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
  }
  

  projectform = new FormGroup(
    {
      // pid:new FormControl('',Validators.required),
      pname:new FormControl('',Validators.required),
      pstartDate:new FormControl('',Validators.required),
      pendDate:new FormControl('',Validators.required),
      pdescription:new FormControl('',Validators.required)
    }
  )
  title = 'user';
  selectedValue: string = '';
  dropdownOpen: boolean = false;
  // pid:number=1;
  pname: string = "";
  pstartDate:string="";
  pendDate:string="";
  pdescription:string="";
  issubmitted: boolean = false;
  projectinfo: any[] = [];
  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }
  onsubmit() {
    this.issubmitted = true;
    this.projectinfo.push({
      "name": this.pname,
      "startDate":this.pstartDate,
      "endDate":this.pendDate,
      "description":this.pdescription
    });
    this.issubmitted=true;
  }

  openform() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
  }
  closeform() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
    
  }
  close() {
    const myFormElement = document.getElementById('myform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
    
  }

  searchText:string="";
setSearch(inputel:HTMLInputElement){
  this.searchText=inputel.value;  
  }


  error=null;
  projectArr:any[] = [];
  selectUserArr:any={};
  unameArray: string[]=[];

  constructor(private proj:ProjectApiService){
    
  }

  ngOnInit(){
    this.retrieveProjects();
  }

  retrieveProjects(){
    this.proj.getProjectData().subscribe(
      (details:any)=>{
        this.projectArr = details.response.Items;
      console.log(details);
      console.log("array is",this.projectArr);
      
    },(error: { message: null; })=>{
      console.log(error);
      this.error = error.message;
    })

    this.proj.getUserData().subscribe(
      (details:any)=>{
        this.selectUserArr = details.response.Items;
         this.unameArray= this.selectUserArr.map((user: { userDetails: { uname: string } }) => user.userDetails.uname);


      console.log(details);
      // console.log("user array is",unameArray);
      
    },(error: { message: null; })=>{
      console.log(error);
      this.error = error.message;
    })
  }

  
  
  
  
  
  saveProjectFormData(details:any){
    let body = {
      // "id":details.pid,
      "projectDetails":{
        "pname":details.pname,
        "pdescription":details.pdescription,
        "pstartDate":details.pstartDate,
        "pendDate":details.pendDate,
        "selectUsers": this.accordionItems
      } 
    }
    this.proj.saveProjectData(body).subscribe((result)=>{
      console.log("res is",result);
      this.retrieveProjects();
    })
    this.close();
    this.projectform.reset();
    this.accordionItems=[]
    const myFormElement = document.getElementById('select');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
  }
}
