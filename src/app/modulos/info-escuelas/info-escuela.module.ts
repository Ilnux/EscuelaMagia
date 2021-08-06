import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

//componentes
import {InicioComponent} from './componentes/inicio/inicio.component';
import {TarjetaCasaComponent} from './componentes/tarjeta-casa/tarjeta-casa.component';
import {TarjetaMiembroComponent} from './componentes/tarjeta-miembros/tarjeta-miembro.component';

//servicio
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {InfoEscuelasRoutingModule} from "./info-escuelas-routing.module";


@NgModule({
  declarations: [
    InicioComponent,
    TarjetaCasaComponent,
    TarjetaMiembroComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    InfoEscuelasRoutingModule
  ]
})
export class InfoEscuelaModule {
}
