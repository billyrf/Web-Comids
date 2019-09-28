import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { HomeIndexComponent } from './home-index.component';
import { HomeIndexRoutingModule } from './home-index-routing.module';
import { WarningMessageModule } from '../../shared/warning-message/warning-message.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbAlertModule,
    HomeIndexRoutingModule,
  ],
  declarations: [
    HomeIndexComponent,
  ]
})
export class HomeIndexModule { }