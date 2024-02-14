import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IUser, CognitoService } from '../../service/cognito.service';

@Component({
  // standalone:true,
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent {
  loading: boolean;
  user: IUser;

  constructor(private router: Router, private cognitoService: CognitoService) {
    this.loading = false;
    this.user = {} as IUser;
  }

  public signIn(): void {
    console.log('Sign-in button clicked.');

    this.loading = true;
    this.cognitoService
      .signIn(this.user)
      .then(() => {
        console.log('Sign-in successful. Navigating to /project-dir.');
        this.router.navigate(['/project-dir']);
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        this.loading = false;
      });
  }
}
