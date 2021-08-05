import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_ROUTING} from "./app.rutas";

//componentes
import {AppComponent} from './app.component';

//modulos
import {InfoEscuelaModule} from "./modulos/info-escuelas/info-escuela.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    BrowserAnimationsModule,
    InfoEscuelaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
