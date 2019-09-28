import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/blank', pathMatch: 'full' },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/homePage/blank.module').then(mod => mod.BlankModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./app-shell/register/grid.module').then(mod => mod.GridModule)
  },
  {
    path: 'listPlace',
    loadChildren: () => import('./app-shell/listPlace/list.module').then(mod => mod.ListModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }

