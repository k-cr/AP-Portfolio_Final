import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './components/Aboutme/aboutme-container/aboutme.component';
import { EduExpComponent } from './components/ExpEdu/edu-exp/edu-exp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/Profile/profileList/profile.component';
import { ProjectsComponent } from './components/Projects/projectsContainer/projects.component';
import { SkillsComponent } from './components/skills/skills-container/skills.component';
import { PortfolioService } from './services/portfolio.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProfileModalsComponent } from './components/Profile/profileModals/profile-modals/profile-modals.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EduExpComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    ProfileModalsComponent,
    PortfolioComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

  //PortfolioService,   {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}
})
export class AppModule { }
