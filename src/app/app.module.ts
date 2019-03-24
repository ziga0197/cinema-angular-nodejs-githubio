import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';

import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomeModule'
  }
];
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    // BrowserModule,
    // HomeModule,
    // BrowserAnimationsModule,
    MatProgressBarModule,
    HttpClientModule,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    OwlModule,
    BrowserAnimationsModule,
    CommonModule,
    // AppRoutingModule,
    
    CommonModule, 
    // chỉ import browserModule 1 lần trong toàn ứng dụng
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
