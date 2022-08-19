import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MatButtonModule} from '@angular/material/button';
import { HighlightDirective } from './highlight.directive'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoansComponent } from './loans/loans.component';
import { LoanTypesComponent } from './loan-types/loan-types.component';
import { AddLoansComponent } from './add-loans/add-loans.component';

import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ClientComponent } from './client/client.component';
import { SearchComponent } from './search/search.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { AdminManageComponent } from './admin-manage/admin-manage.component';
import { AdminEditComponent } from './admin-edit/admin-edit.component';
import { AdminDeleteComponent } from './admin-delete/admin-delete.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoansComponent,
    LoanTypesComponent,
    AddLoansComponent,
    ProductComponent,
    ClientComponent,
    SearchComponent,
    NotFoundPageComponent,
    AdminManageComponent,
    AdminEditComponent,
    AdminDeleteComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide:LocationStrategy,
      useClass:PathLocationStrategy
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
