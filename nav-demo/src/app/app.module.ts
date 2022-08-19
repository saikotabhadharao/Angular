import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { AboutComponent } from './component/about/about.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';  
import {appRoutes} from './routerConfig';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AboutComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RouterModule,
    RouterModule.forRoot(appRoutes) 

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
