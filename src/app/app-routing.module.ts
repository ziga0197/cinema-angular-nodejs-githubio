import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { ChitietphimComponent } from './home/trang-chu/chitietphim/chitietphim.component';
import { DatVeComponent } from './home/trang-chu/dat-ve/dat-ve.component';
import { DanhSachVeComponent } from './home/trang-chu/dat-ve/danh-sach-ve/danh-sach-ve.component';
import { LoginComponent } from './home/trang-chu/header/login/login.component';
import { LoginGuard } from './guard/login.guard';
import { HomeModule } from './home/home.module';
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