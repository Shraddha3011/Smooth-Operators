import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectApiService } from '../project-api.service';
@Component({
  selector: 'app-project-dir',
  templateUrl: './project-dir.component.html',
  styleUrls: ['./project-dir.component.css']
})
export class ProjectDirComponent {

  dropdownOptions = ['Vaidehi', 'Sairaj', 'Ayush', 'Prasad'];
  accordionItems: string[] = [];

  addItemToAccordion(option: string) {
    // Add the selected option to the accordionItems array
    this.accordionItems.push(option);
  }

  projectform = new FormGroup(
    {
      name:new FormControl(''),
      startDate:new FormControl(''),
      endDate:new FormControl(''),
      description:new FormControl('')
    }
  )
  title = 'user';
  selectedValue: string = '';
  dropdownOpen: boolean = true;
  name: string = "";
  startDate:string="";
  endDate:string="";
  description:string="";
  issubmitted: boolean = false;
  projectinfo: any[] = [];
  // toggleDropdown() {
  //   this.dropdownOpen = !this.dropdownOpen;
  // }

  onsubmit() {
    this.issubmitted = true;
    this.projectinfo.push({
      "name": this.name,
      "startDate":this.startDate,
      "endDate":this.endDate,
      "description":this.description
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


  error=null;
  projectArr:any[] = [];


  constructor(private proj:ProjectApiService){
    this.proj.getProjectData().subscribe(
      (details:any)=>{
        this.projectArr = details.response.Items;
      console.log(details);
      console.log("array is",this.projectArr);
    },(error: { message: null; })=>{
      console.log(error);
      this.error = error.message;
    })
  }


  saveProjectFormData(details:any){
    let body = {
      "id":details.id,
      "projectDetails":{
        "pname":details.pname,
        "pdescription":details.pdescription,
        "pstartDate":details.pstartDate,
        "pendDate":details.pendDate
      }
    }
    this.proj.saveProjectData(body).subscribe((result)=>{
      console.log(result);
    })
  }
  
}
