import {RouterModule, Routes} from '@angular/router';


const RUTAS: Routes = [
  {
    path: 'info',
    loadChildren: () => import('./modulos/info-escuelas/info-escuela.module').then(m => m.InfoEscuelaModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: 'inicio'}
];

export const APP_ROUTING = RouterModule.forRoot(RUTAS);
