import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PortfolioComponent } from './components/portfolio/portfolio.component';

const routes: Routes = [
  /*
  {path:'', redirectTo:'portfolio', pathMatch: 'full'},
  {path:'profile', component: ProfileComponent},
  {path:'profile/:id', component: ProfileEditComponent} */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
