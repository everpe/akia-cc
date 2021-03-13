import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
 
  {
    path: '',
    children:[
      { path:'login',component: LoginComponent},
      { path:'dashboard',component: DashboardComponent},
      { path: '**',   redirectTo: 'login'}
    ]
    
  },
  // ,
];

// {useHash:true} para el problema de cuando se recarga en ruta en produccion
@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class AdminRoutingModule { }