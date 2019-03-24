import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// modules
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
import {ReactiveFormsModule} from '@angular/forms';
import swal from 'sweetalert';
// components
import { LayoutAdminComponent } from './layout-admin/layout-admin.component';
import { SidebarComponent } from './layout-admin/sidebar/sidebar.component';
import { TopNavComponent } from './layout-admin/top-nav/top-nav.component';
import { QuanlyNguoidungComponent } from './layout-admin/quanly-nguoidung/quanly-nguoidung.component';
import { LoginComponent } from './login/login.component';
import { NguoidungComponent } from './layout-admin/quanly-nguoidung/nguoidung/nguoidung.component';
import { ChitietNguoidungComponent } from './layout-admin/quanly-nguoidung/chitiet-nguoidung/chitiet-nguoidung.component';
import { FormNguoidungComponent } from './layout-admin/quanly-nguoidung/form-nguoidung/form-nguoidung.component';
import { QuanlyPhimComponent } from './layout-admin/quanly-phim/quanly-phim.component';
import { PhimComponent } from './layout-admin/quanly-phim/phim/phim.component';
import { ChitietPhimComponent } from './layout-admin/quanly-phim/chitiet-phim/chitiet-phim.component';
import { PipesModule } from '../pipes/pipes.module';
import { FormPhimComponent } from './layout-admin/quanly-phim/form-phim/form-phim.component';
import { TrangChuAdminComponent } from './layout-admin/trang-chu-admin/trang-chu-admin.component';
import { ThongKeComponent } from './layout-admin/trang-chu-admin/thong-ke/thong-ke.component';
import { QuanlyLichchieuComponent } from './layout-admin/quanly-lichchieu/quanly-lichchieu.component';
import { PhimLcComponent } from './layout-admin/quanly-lichchieu/phim-lc/phim-lc.component';
import { Routes, RouterModule } from '@angular/router';
import { AdminLoginGuard } from '../guard/admin-login.guard';
import { LichChieuComponent } from './layout-admin/quanly-lichchieu/lich-chieu/lich-chieu.component';
import { DsLichchieuComponent } from './layout-admin/quanly-lichchieu/ds-lichchieu/ds-lichchieu.component';
import { InfoAdminComponent } from './layout-admin/info-admin/info-admin.component';
import { FormAdminComponent } from './layout-admin/info-admin/form-admin/form-admin.component';

const adminRoutes: Routes = [
  {path: 'login', component: LoginComponent},
  {
    path: '', component: LayoutAdminComponent, canActivate: [AdminLoginGuard], children: [
      {path: '', component: TrangChuAdminComponent},
      {path: 'dashboard', component: TrangChuAdminComponent},
      {path: 'thongtin-admin', component: InfoAdminComponent},
      {path: 'quanly-nguoidung', component: QuanlyNguoidungComponent},
      {path: 'quanly-phim', component: QuanlyPhimComponent},
      {path: 'quanly-lichchieu', component: QuanlyLichchieuComponent},
      {path: 'danhsach-lichchieu/:id', component: DsLichchieuComponent},
      {path: '**', redirectTo: ''}
    ]
  },
  {path: '**', redirectTo: 'login'}
];

@NgModule({
  declarations: [
    LoginComponent,
    SidebarComponent,
    TopNavComponent,
    QuanlyNguoidungComponent,
    LayoutAdminComponent,
    NguoidungComponent,
    ChitietNguoidungComponent,
    FormNguoidungComponent,
    QuanlyPhimComponent,
    PhimComponent,
    ChitietPhimComponent,
    FormPhimComponent,
    TrangChuAdminComponent,
    ThongKeComponent,
    QuanlyLichchieuComponent,
    PhimLcComponent,
    LichChieuComponent,
    DsLichchieuComponent,
    InfoAdminComponent,
    FormAdminComponent
  ],

  imports: [
    CommonModule,
    HttpClientModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    PipesModule,
    RouterModule.forChild(adminRoutes),
  ],
})
export class AdminModule { }
