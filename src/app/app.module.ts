import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressBarModule } from '@angular/material';
import { YoutubeEPipe } from './pipes/youtube-e.pipe';

import { HttpClientModule } from '@angular/common/http';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutesComponent } from './home/trang-chu/home-routes/home-routes.component';


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
    AppRoutingModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
