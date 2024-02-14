import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, CognitoService } from '../../service/cognito.service';
@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css'],
})
export class LandingPageComponent {
  constructor(private cognitoService: CognitoService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    const isAuthenticated: boolean =
      await this.cognitoService.isAuthenticated();

    if (isAuthenticated) {
      this.cognitoService.signOut();
    } else {
    }
  }
  public SignIn() {
    this.router.navigate(['/signIn']);
  }
  public SignUp() {
    this.router.navigate(['/signUp']);
  }
}
