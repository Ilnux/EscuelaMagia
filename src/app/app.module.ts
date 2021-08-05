import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


//componentes
import {AppComponent} from './app.component';
import {InicioComponent} from './componentes/inicio/inicio.component';
import {TarjetaCasaComponent} from './componentes/tarjeta-casa/tarjeta-casa.component';
import {TarjetaMiembroComponent} from './componentes/tarjeta-miembros/tarjeta-miembro.component';

import {APP_ROUTING} from "./app.rutas";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TarjetaCasaComponent,
    TarjetaMiembroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
