﻿import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '',   redirectTo: '/homePage', pathMatch: 'full' },
  {
    path: 'blank',
    loadChildren: () => import('./app-shell/homePage/blank.module').then(mod => mod.BlankModule)
  },
  {
    path: 'grid',
    loadChildren: () => import('./app-shell/register/grid.module').then(mod => mod.GridModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./app-shell/list/list.module').then(mod => mod.ListModule)
  },
  {
    path: 'master-detail',
    loadChildren: () => import('./app-shell/master-detail/master-detail.module').then(mod => mod.MasterDetailModule)
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

