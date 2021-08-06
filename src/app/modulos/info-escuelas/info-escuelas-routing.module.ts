import {NgModule} from '@angular/core';
import {InicioComponent} from "./componentes/inicio/inicio.component";
import {RouterModule, Routes} from "@angular/router";

const RUTAS: Routes = [
  {
    path: '', children: [
      {path: 'inicio', component: InicioComponent},
      {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(RUTAS)]
})
export class InfoEscuelasRoutingModule {
}
