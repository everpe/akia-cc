import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {AdminRoutingModule} from './admin-routing.module';
import {LoginComponent} from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {TableCategoriesComponent} from './components/categories/table-categories/table-categories.component';
import { CreateComponent } from './components/categories/create/create.component';
import { UpdateComponent } from './components/categories/update/update.component';
import {MaterialModule} from '../../app/components/material/material.module';
import { TableNewsComponent } from './components/news/table-news/table-news.component';
import { CreateNewComponent } from './components/news/create-new/create-new.component';
import { UpdateNewComponent } from './components/news/update-new/update-new.component';
import { TableProductsComponent } from './components/products/table-products/table-products.component';
import { CreateProductComponent } from './components/products/create-product/create-product.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { TableShopsComponent } from './components/shops/table-shops/table-shops.component';
import { CreateShopComponent } from './components/shops/create-shop/create-shop.component';
import { UpdateShopComponent } from './components/shops/update-shop/update-shop.component';
import { RentsComponent } from './components/rents/rents.component';
import { ConfigComponent } from './components/config/config.component';

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    TableCategoriesComponent,
    CreateComponent,
    UpdateComponent,
    TableNewsComponent,
    CreateNewComponent,
    UpdateNewComponent,
    TableProductsComponent,
    CreateProductComponent,
    UpdateProductComponent,
    TableShopsComponent,
    CreateShopComponent,
    UpdateShopComponent,
    RentsComponent,
    ConfigComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AdminRoutingModule,
    FormsModule,
    MaterialModule
  ]
  ,
  exports:      [ ]
})
export class AdminModule { }
