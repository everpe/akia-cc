import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTS
import { AppComponent } from './app.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { CarrouselComponent } from './components/shared/carrousel/carrousel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TiendasComponent } from './components/tiendas/tiendas.component';
import { TerrazaComponent } from './components/terraza/terraza.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FamiliaAkiaComponent } from './components/familia-akia/familia-akia.component';
import { ConocenosComponent } from './components/conocenos/conocenos.component';
import { FloatingSideMenuComponent } from './components/shared/floating-side-menu/floating-side-menu.component';
// ANGULAR MATERIAL
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorIntl, MatPaginatorModule} from '@angular/material/paginator';
import { PaginatePipe } from './pipes/paginate.pipe';
import {CustomMatPaginatorIntl} from './paginator-es';
import { FormInfoRentaComponent } from './components/form-info-renta/form-info-renta.component';
// SCROLL INTO PAGE
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
// google maps
// import { AgmCoreModule } from '@agm/core';
import { FormHablaConNosotrosComponent } from './components/form-habla-con-nosotros/form-habla-con-nosotros.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CarrouselComponent,
    TiendasComponent,
    TerrazaComponent,
    NoticiasComponent,
    ContactoComponent,
    FamiliaAkiaComponent,
    ConocenosComponent,
    FloatingSideMenuComponent,
    PaginatePipe,
    FormInfoRentaComponent,
    FormHablaConNosotrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    NgxPageScrollCoreModule.forRoot({ duration: 1600 }),
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyDqPgHdZTk0vIZO2Ky2Z1sjQo_NtW0CKJU'
    //   // apiKey: 'AIzaSyAC7D5FiKltj1jTo_0-XAH5SykTZMUqE3g'
    // })
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
