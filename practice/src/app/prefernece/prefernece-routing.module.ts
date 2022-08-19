import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreferneceComponent } from './prefernece.component';

const routes: Routes = [{ path: '', component: PreferneceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreferneceRoutingModule { }
