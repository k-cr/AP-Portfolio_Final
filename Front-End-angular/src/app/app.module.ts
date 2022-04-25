import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EduExpComponent } from './components/edu-exp/edu-exp.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { PortfolioService } from './services/portfolio.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutmeComponent,
    EduExpComponent,
    NavbarComponent,
    ProfileComponent,
    ProjectsComponent,
    SkillsComponent,
    LogInComponent,
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
    ReactiveFormsModule
  ],
  providers: [PortfolioService, 
    {provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
