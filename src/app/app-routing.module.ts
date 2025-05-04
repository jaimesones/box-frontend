import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions  } from '@angular/router';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'home', loadChildren: () => import('./pages/home.module').then(module => module.HomeModule)}, // lazy load
];

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',  // Habilita la restauración de la posición del scroll
  anchorScrolling: 'enabled',           // Habilita el desplazamiento a los elementos de anclaje (#)
};



@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
