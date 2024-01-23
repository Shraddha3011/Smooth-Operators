import { Component,Input } from '@angular/core';
import { ProjectApiService } from '../project-api.service';
import Swal from 'sweetalert2';
// import Swal from 'sweetalert2';
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
      // if(confirm("Are you sure to Delete ?")){
      //   this.user.deleteUser(id).subscribe((result)=>{
          
      //     console.log(id);
      //   })
      //   // this.projectArr.splice(0,1);
      //   delete this.projectArr.pid;
      //   alert("Deleted");
      // }
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
          this.user.deleteUser(id).subscribe(
            (response) => {
              console.log('Job deleted successfully');
              Swal.fire('Success!', 'Job deleted successfully!', 'success');
              
            },
            (error: any) => {
              console.error('Error deleting job', error);
              Swal.fire('Error', 'Failed to delete the job', 'error');
            }
          );
        }
      });
    }
    
    onEdit(obj:any){
      
    }

    openDetails(){
      const myFormElement = document.getElementById('ans');
    if (myFormElement) {
      myFormElement.style.display = 'block';
    }
    }
    closeDetails(){
      const myFormElement = document.getElementById('ans');
    if (myFormElement) {
      myFormElement.style.display = 'none';
    }
    }

    @Input()
  searchText:string="";
}
