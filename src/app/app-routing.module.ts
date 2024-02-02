import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDirComponent } from './project-dir/project-dir.component';
import { UserDirComponent } from './user-dir/user-dir.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
 
  {path:'',component:ProjectDirComponent},
  {path:'project-dir',component:ProjectDirComponent},
  {path:'user-dir',component:UserDirComponent},
   // {
  //   path: '',
  //   redirectTo: 'signIn',
  //   pathMatch: 'full',
  // },
  {
    path: 'profile',
    component: ProfileComponent,
  },
  {
    path: 'signIn',
    component: SignInComponent,
  },
  {
    path: 'signUp',
    component: SignUpComponent,
  },
  // {
  //   path: '**',
  //   redirectTo: 'signIn',
  // },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
