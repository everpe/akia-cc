import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { JwPaginationModule } from 'jw-angular-pagination';

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
    PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    JwPaginationModule,
    BrowserAnimationsModule,
    MatPaginatorModule
  ],
  providers: [{ provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
