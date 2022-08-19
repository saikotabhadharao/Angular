import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreferneceRoutingModule } from './prefernece-routing.module';
import { PreferneceComponent } from './prefernece.component';


@NgModule({
  declarations: [
    PreferneceComponent
  ],
  imports: [
    CommonModule,
    PreferneceRoutingModule
  ]
})
export class PreferneceModule { }
