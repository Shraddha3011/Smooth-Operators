import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDirComponent } from './project-dir/project-dir.component';
import { UserDirComponent } from './user-dir/user-dir.component';

const routes: Routes = [
  {path:'',component:ProjectDirComponent},
  {path:'project-dir',component:ProjectDirComponent},
  {path:'user-dir',component:UserDirComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
