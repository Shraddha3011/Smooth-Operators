import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDirComponent } from './project-dir/project-dir.component';
import { UserDirComponent } from './user-dir/user-dir.component';
import { ProjectCardComponent } from './project-card/project-card.component';
import { UserCardComponent } from './user-card/user-card.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    ProjectDirComponent,
    UserDirComponent,
    ProjectCardComponent,
    UserCardComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
