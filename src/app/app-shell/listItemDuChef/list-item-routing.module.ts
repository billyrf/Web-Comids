import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListItemComponent } from './list-Item.component';

const routes: Routes = [
  {
    path: '',
    component: ListItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemRoutingModule { }