import {RouterModule, Routes} from '@angular/router';
import {InicioComponent} from "./componentes/inicio/inicio.component";



const RUTAS: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(RUTAS);
