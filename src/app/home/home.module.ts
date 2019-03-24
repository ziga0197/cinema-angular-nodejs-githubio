import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HeaderComponent } from './trang-chu/header/header.component';
import { NavbarComponent } from './trang-chu/navbar/navbar.component';
import { OnGoingComponent } from './trang-chu/on-going/on-going.component';
import { ComingSoonComponent } from './trang-chu/coming-soon/coming-soon.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { SliderComponent } from './trang-chu/slider/slider.component';
import { OwlModule } from 'ngx-owl-carousel';
import { PhimComponent } from './trang-chu/phim/phim.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule, MatTabsModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { LoaiPhimComponent } from './trang-chu/loai-phim/loai-phim.component';
import { PhimService } from '../services/phim.service';
import { HttpClientModule } from '@angular/common/http';
import { ChitietphimComponent } from './trang-chu/chitietphim/chitietphim.component';
import { YoutubeEPipe } from '../pipes/youtube-e.pipe';
import { PipesModule } from '../pipes/pipes/pipes.module';
import { DatVeComponent } from './trang-chu/dat-ve/dat-ve.component';
import { VeComponent } from './trang-chu/dat-ve/ve/ve.component';
import { DanhSachVeComponent } from './trang-chu/dat-ve/danh-sach-ve/danh-sach-ve.component';
import { LoginComponent } from './trang-chu/header/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from '../guard/login.guard';
import { HomeRoutesComponent } from './trang-chu/home-routes/home-routes.component';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { BrowserModule } from '@angular/platform-browser';
// import {YoutubeEPipe} from '../pipes/youtube-e.pipe';
const homeRoutes: Routes = [
  {
    path: '', component: HomeRoutesComponent, children: [
      {
        path: '', component: TrangChuComponent
      },
      {
        path: 'chi-tiet-phim/:maphim', component: ChitietphimComponent
      },
      {
        path: 'phong-ve/:malichchieu', component: DanhSachVeComponent, canActivate: [LoginGuard]
      },
      {
        path: 'dang-nhap', component: LoginComponent
      }
    ]
  },

]
@NgModule({
  declarations: [
    TrangChuComponent,
    HeaderComponent,
    NavbarComponent,
    OnGoingComponent,
    ComingSoonComponent,
    SliderComponent,
    PhimComponent,
    LoaiPhimComponent,
    ChitietphimComponent,
    YoutubeEPipe,
    DatVeComponent,
    VeComponent,
    DanhSachVeComponent,
    LoginComponent,
    FooterComponent,
    HomeRoutesComponent
  ],
  imports: [
    CommonModule,
    AngularFontAwesomeModule,
    OwlModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    HttpClientModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    PipesModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule.forChild(homeRoutes),
    LoadingBarModule,
    BrowserModule
  ],
  exports: [
    TrangChuComponent,
    HeaderComponent,
    NavbarComponent,
    OnGoingComponent,
    ComingSoonComponent,
    SliderComponent,
    PhimComponent,
    ChitietphimComponent,
    YoutubeEPipe,
    FooterComponent,
    HomeRoutesComponent
  ],
  providers: [
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }
  ]
})
export class HomeModule { }
