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


    // public searchTerm: string = '';
    
}
