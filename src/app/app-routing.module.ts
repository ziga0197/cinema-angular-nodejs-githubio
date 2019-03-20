import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { TrangChuComponent } from './home/trang-chu/trang-chu.component';
import { ChitietphimComponent } from './home/trang-chu/chitietphim/chitietphim.component';
import { DatVeComponent } from './home/trang-chu/dat-ve/dat-ve.component';
import { DanhSachVeComponent } from './home/trang-chu/dat-ve/danh-sach-ve/danh-sach-ve.component';
import { LoginComponent } from './home/trang-chu/header/login/login.component';

const routes: Routes = [
  {
    path: '', component: TrangChuComponent
  },
  {
    path: 'chi-tiet-phim/:maphim', component: ChitietphimComponent
  },
  {
    path: 'phong-ve/:malichchieu', component: DanhSachVeComponent
  },
  {
    path: 'dang-nhap', component: LoginComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
export const routingApp = [TrangChuComponent];