import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route,RouterModule, Routes, ROUTES} from '@angular/router'
import { LoansComponent } from './loans/loans.component';
import { AddLoansComponent } from './add-loans/add-loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './search/search.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin.guard';
import { ChildGuard } from './child.guard';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { PreferenceloadGuard } from './preferenceload.guard';
import { UnsavedGuard } from './unsaved.guard';
import { AppinfoGuard } from './appinfo.guard';
import { AddCustomerComponent } from './add-customer/add-customer.component';

const routes:Routes=[
 
  {
    path:'product/:Id/photo/:photoId',
    component:ProductComponent
  },
  {
    path:'add-new-component',
    redirectTo:'loan-types'
  },
  {
    //Route guard
    path:'client',
    component:ClientComponent,
    canActivate:[AdminGuard,AuthGuard]
  },
  /*{
    path:'loans/:Id',
    component:LoansComponent
  },*/
  {
    path:'loans/:Id/firstname/:firstName',
    component:LoansComponent
  },
  {
    path:'loans',
    
    canActivate:[AdminGuard],
    children:[
     {
      path:'',
      component:LoansComponent,
      canActivateChild:[ChildGuard],
      children:[
        
        {
          path:'manage',
          component:AdminManageComponent
        },
        {
          path:'edit',
          component:AdminEditComponent
        },
        {
          path:'delete',
          component:AdminDeleteComponent
        }

      ]
     }
    ]
  },

  {
    path:'loan-types',
    component:LoanTypesComponent
  },
  {
    path:'add-loans',
    component:AddLoansComponent,
    resolve:{
      data:AppinfoGuard
    }
  },
  //Query Params
  {
    path:'search',
    component:SearchComponent,
    canDeactivate:[UnsavedGuard]
  },
 
  { path: 'payment', loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule) },
 
  { path: 'preference', 
  canLoad:[PreferenceloadGuard],
  loadChildren: () => import('./prefernece/prefernece.module').then(m => m.PreferneceModule) },
  {
    path:'customer/add',
    component:AddCustomerComponent
  },
  //WildCard Routes
  {
    path:'**',
    component:NotFoundPageComponent
  }
  
  

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class AppRoutingModule { }
