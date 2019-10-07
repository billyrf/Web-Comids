import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { listItemComponent } from './listItem.component';

const routes: Routes = [
  {
    path: '',
    component: listItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListItemRoutingModule { }