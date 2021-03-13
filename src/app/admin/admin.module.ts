import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    FormsModule
    
  ]
  ,
  exports:      [ ]
})
export class AdminModule { }
