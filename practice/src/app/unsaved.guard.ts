import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SearchComponent } from './search/search.component';

@Injectable({
  providedIn: 'root'
})
export class UnsavedGuard implements CanDeactivate<SearchComponent> {
  canDeactivate(component: SearchComponent){
   /* if(component.dirty){
      return window.confirm("do ou want to leave this page");
    }*/
    return window.confirm("do ou want to leave this page");
   
   // return true;
  }
  
}
