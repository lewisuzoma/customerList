import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'intro',
    loadChildren: () => import('./pages/onboarding_pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/application_pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'full-modal',
    loadChildren: () => import('./modals/full-modal/full-modal.module').then( m => m.FullModalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
