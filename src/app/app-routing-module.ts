import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home-module').then(m => m.HomeModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about-module').then(m => m.AboutModule)
  },
  {
    path: 'programmes',
    loadChildren: () => import('./pages/programmes/programmes-module').then(m => m.ProgrammesModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact-module').then(m => m.ContactModule)
  },
  {
    path: 'fju',
    loadChildren: () => import('./pages/fju/fju-module').then(m => m.FjuModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
