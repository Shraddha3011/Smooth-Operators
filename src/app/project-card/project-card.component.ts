import { Component,Input } from '@angular/core';
import { ProjectApiService } from '../project-api.service';
@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
  @Input()
  projectArr:any={};
    accordions = [
      { question: 'Lorem ipsum dolor sit amet consectetur.', answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione modi incidunt doloremque eius recusandae quibusdam nihil beatae laudantium nesciunt praesentium?', active: false },
    ];
  style: any;
  
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

    constructor(private user:ProjectApiService){}
    
    deleteItem(id:any){
      if(confirm("Are you sure to Delete ?")){
        this.user.deleteUser(id).subscribe((result)=>{
          
          console.log(id);
        })
        // this.projectArr.splice(0,1);
        delete this.projectArr.pid;
        alert("Deleted");
      }
      
    }
    
    onEdit(obj:any){
      
    }

    selectedItem: any = null;

    viewItem(project: any) {
      this.selectedItem = this.selectedItem === project.projectDetails ? null : project.projectDetails; 
      if(this.selectedItem){
        this.selectedItem.style.display="block";
      }
        
    }

    closeDetails(){
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


    @Input()
  searchText:string="";
}
