import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MasterDetailModule } from './app-shell/listItem/master-detail.module';
import { ListModule } from './app-shell/listPlace/list.module';
import { GridModule } from './app-shell/register/grid.module';
import { BlankModule } from './app-shell/homePage/blank.module';
import { NavBarComponent } from './app-shell/nav-bar/nav-bar.component';
import { FooterComponent } from './app-shell/footer/footer.component';
import { HomeIndexComponent } from './app-shell/homeIndex/home-index/home-index.component';
import { HomeIndexRoutingPipe } from './app-shell/homeIndex/home-index/home-index-routing.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeIndexComponent,
    HomeIndexRoutingPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MasterDetailModule,
    ListModule,
    GridModule,
    BlankModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
