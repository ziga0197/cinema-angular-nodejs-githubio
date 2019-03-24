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

const routes: Routes = [
  {
    path: 'home', loadChildren: ()=> HomeModule
  },
  // {
  //   path: 'chi-tiet-phim/:maphim', component: ChitietphimComponent
  // },
  // {
  //   path: 'phong-ve/:malichchieu', component: DanhSachVeComponent,canActivate: [LoginGuard]
  // },
  // {
  //   path: 'dang-nhap', component: LoginComponent
  // }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingApp = [TrangChuComponent];