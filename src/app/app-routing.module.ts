import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '', loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'home', loadChildren: './home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    CommonModule, 
    // chỉ import browserModule 1 lần trong toàn ứng dụng
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }