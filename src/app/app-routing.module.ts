import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {HomeComponent }  from './components/home/home.component';
import  {TiendasComponent }  from './components/tiendas/tiendas.component';
import  {TerrazaComponent }  from './components/terraza/terraza.component';
import  {NoticiasComponent }  from './components/noticias/noticias.component';
import  {ContactoComponent }  from './components/contacto/contacto.component';
import  {FamiliaAkiaComponent }  from './components/familia-akia/familia-akia.component';
import  {ConocenosComponent }  from './components/conocenos/conocenos.component';
// import { LoginComponent } from './auth/login/login.component';
import { ShowNewComponent } from './components/show-new/show-new.component';
import { RentarComponent } from './components/rentar/rentar.component';

const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'stores', component: TiendasComponent},
  {path: 'terrace', component: TerrazaComponent},
  {path: 'news', component: NoticiasComponent},
  {path: 'contact', component: ContactoComponent},
  {path: 'family-akia', component: FamiliaAkiaComponent},
  {path: 'knows', component: ConocenosComponent},
  // {path: 'login', component: LoginComponent},
  {path: 'show/new', component: ShowNewComponent},
  {path: 'rentar', component: RentarComponent},
  
  {path: '**', redirectTo: '', pathMatch: 'full'}
];

// {useHash:true} para el problema de cuando se recarga en ruta en produccion
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})], 
  exports: [RouterModule]
})
export class AppRoutingModule { }