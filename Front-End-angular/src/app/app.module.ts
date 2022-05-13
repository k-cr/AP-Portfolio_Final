import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Componentes normales

import { AboutmeComponent } from './components/Aboutme/aboutme.component';
import { EduExpComponent } from './components/edu-exp/edu-exp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/Profile/profile.component';
import { ProjectsComponent } from './components/Projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

import { ProfileEditComponent } from './components/Profile/profile-edit/profile-edit.component';
import { ProfileModalsComponent } from './components/Profile/profile-modals/profile-modals.component';

// Servicios

import { PortfolioService } from './services/portfolio.service';


// Módulos
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EduExpComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    PortfolioComponent,
    ProfileEditComponent,
    ProfileModalsComponent
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
