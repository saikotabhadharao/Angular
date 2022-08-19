import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppinfoGuard implements Resolve<any> {
  userdata={
    id:10,
    name:'kota'
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
   return this.userdata;
  }
 
  
}
