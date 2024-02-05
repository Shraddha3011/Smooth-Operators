import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { ProjectApiService } from '../project-api.service';



@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  navData = navbarData;

  constructor( public sid:ProjectApiService) { }
  

  toggleDarkMode(): void {
    this.sid.toggleDarkMode();}
}
