import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
<<<<<<< HEAD
import { ProfileComponent } from './components/Profile/profileList/profile.component';
=======
import { ProfileEditComponent } from './components/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/profile/profile.component';
>>>>>>> parent of 4432a85 (Cambios necesarios en la estructura)

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
