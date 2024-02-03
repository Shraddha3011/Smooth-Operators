import { Component } from '@angular/core';
import { navbarData } from './nav-data';
import { ProjectApiService } from '../project-api.service';
import { Router } from '@angular/router';
import { CognitoService } from '../cognito.service';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  navData = navbarData;

  constructor( public sid:ProjectApiService,private cognitoService: CognitoService,private router: Router) { }
  async ngOnInit(): Promise<void> {
    const isAuthenticated: boolean = await this.cognitoService.isAuthenticated();

    if (isAuthenticated) 
    {
      this.cognitoService.signOut().then(()=>
      {
        this.router.navigate(['/landing-page'])
      })
    } 
    else 
    {

    }
  }

  toggleDarkMode(): void {
    this.sid.toggleDarkMode();}
}
