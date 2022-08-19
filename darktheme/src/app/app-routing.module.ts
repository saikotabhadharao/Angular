import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { ClientComponent } from './client/client.component';
import { LoanComponent } from './loan/loan.component';

const routes: Routes = [
  {
    path:'loan/:id/name/:name',
    component:LoanComponent
  },
  {
    path:'add-loan/:id',
    component:AddLoanComponent
  },
  {
    path:'client',
    component:ClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
