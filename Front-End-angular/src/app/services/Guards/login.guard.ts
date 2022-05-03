import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  
  constructor(private router: Router, private tokenService: TokenService){

  }
  canActivate(
      next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): boolean 
      {
          if(this.tokenService.isLogged()){
              this.router.navigate(['/index']);
              return false;                
          }
      return true;
  }

  
  
}