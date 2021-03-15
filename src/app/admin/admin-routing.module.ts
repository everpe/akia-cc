import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/login/login.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {TableCategoriesComponent} from  './components/categories/table-categories/table-categories.component';
import {TableNewsComponent} from  './components/news/table-news/table-news.component';
import {TableShopsComponent} from  './components/shops/table-shops/table-shops.component';
import {TableProductsComponent} from  './components/products/table-products/table-products.component';
import {RentsComponent} from  './components/rents/rents.component';

const routes: Routes = [
 
  {
    path: '',
    children:[
      { path:'login',component: LoginComponent},
      { path:'dashboard',component: DashboardComponent},
      { path:'categories',component: TableCategoriesComponent},
      { path:'news',component: TableNewsComponent},
      { path:'shops',component: TableShopsComponent},
      { path:'products',component: TableProductsComponent},
      { path:'rents',component: RentsComponent},
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