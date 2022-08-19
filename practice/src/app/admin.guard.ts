import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  user=true;
  canActivate(){
    this.user=true;
    if(this.user){
      return true;
    }
    else{
      return false;
    }
  }
   
    
  
}
