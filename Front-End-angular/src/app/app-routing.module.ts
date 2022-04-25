import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { GuardGuard } from './services/guard.guard';

const routes: Routes = [
  {path:'portfolio', component: PortfolioComponent, canActivate:[GuardGuard]},
  {path:'login', component: LogInComponent},
  {path:'', redirectTo:'login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
