import { Component,Input,Output,EventEmitter } from '@angular/core';
import { ProjectApiService } from '../project-api.service';
import Swal from 'sweetalert2';
import { SearchFilterPipe } from '../search-filter.pipe';
import { NgForm } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent  {
  projectStatus: string = '';
  // @ViewChild('#projectForm') form: NgForm;
  @Input()
  projectArr: any = {};

  accordions = [
    { question: 'Lorem ipsum dolor sit amet consectetur.', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione modi incidunt doloremque eius recusandae quibusdam nihil beatae laudantium nesciunt praesentium?', active: false },
  ];
  style: any;
  router: any;
  
    toggleAccordion(accordion: any): void {
      accordion.active = !accordion.active;
    }

  // activeProject: any;

  // // Toggle accordion function
  // toggleAccordion(project: any): void {
  //   this.activeProject = this.activeProject === project ? null : project;
  // }

  @Input()
  accordionItems: any[] = [];

  constructor(private user: ProjectApiService) { }

    
    
    deleteItem(id:any){
      // if(confirm("Are you sure to Delete ?")){
      //   this.user.deleteUser(id).subscribe((result)=>{
          
      //     console.log(id);
      //   })
      //   // this.projectArr.splice(0,1);
      //   delete this.projectArr.pid;
      //   alert("Deleted");
      // }
      console.log(id);
      
      Swal.fire({
        title: 'Confirm Deletion',
        text: 'Are you sure you want to delete this project?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result:any) => {
        if (result.isConfirmed) {
          this.user.deleteProject(id).subscribe(
            (response) => {
              console.log('Project deleted successfully');
              Swal.fire('Success!', 'Project deleted successfully!', 'success');
              this.childMethod();
              // this.updateProjectArr(id);
            },
            (error: any) => {
              console.error('Error deleting Project', error);
              Swal.fire('Error', 'Failed to delete the Project', 'error');
            }
          );
        }
      });
    }
    

    // onEditClicked(pid : string){
    //   let currentProject = this.projectArr.find((p: { pid: string; })=> {return p.pid ===pid})
    //   console.log(currentProject);
      

  //   // this.form.setValue({
  //   //   pname:currentProject.pname,
  //   // });
  // }

  selectedItem: any = null;

  viewItem(project: any) {
    console.log(project.id);
    this.selectedItem = this.selectedItem === project.projectDetails ? null : project.projectDetails;
    if (this.selectedItem) {
      this.selectedItem.style.display = "block";
    }
  }
    uname: string = "";
    stdate:string="";
    endate:string="";
    des:string="";


  updateItem(project: any) {


     this.uname = project.projectDetails.pname;
     this.stdate = project.projectDetails.pstartDate;
     this.endate = project.projectDetails.pendDate;
     this.des = project.projectDetails.pdescription;
     const myFormElement = document.getElementById('pform');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
    
    
  }
  closeform() {
    const myFormElement = document.getElementById('pform');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
    
  }
  closeDetails() {
    this.selectedItem = null;
  }


  // viewItem(){
  //   const myFormElement = document.getElementById('ans');
  // if (myFormElement) {
  //   myFormElement.style.display = 'block';
  // }
  // }

  // closeDetails(){
  //   const myFormElement = document.getElementById('ans');
  // if (myFormElement) {
  //   myFormElement.style.display = 'none';
  // }
  // }

    // private updateProjectArr(deletedProjectId: any) {

    //   const deletedIndex = this.projectArr.findIndex((project: any) => project.id === deletedProjectId);
  
    //   if (deletedIndex !== -1) {
    //     this.projectArr.splice(deletedIndex, 1);
    //   }
    // }




  @Input()
  searchText: string = "";


  status: string = 'Pending';

      updateStatus(newStatus: string) {
        this.status = newStatus;
      }
      @Output() testEvent = new EventEmitter();

      childMethod(){
        this.testEvent.emit();
      }








      accordionItem: any[] = [];

  addItemToAccordion(option: any) {
    this.accordionItem.push(option);
    const indexToRemove = this.unameArray.indexOf(option);
    if (indexToRemove !== -1) {
      this.unameArray.splice(indexToRemove, 1);

    }
    const myFormElement = document.getElementById('select');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
  }
  selectUserArr:any={};
  unameArray: string[]=[];

error=null;
  ngOnInit(){
    this.retrieveProjects();
  }
  retrieveProjects(){
    

    this.user.getUserData().subscribe(
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
}


