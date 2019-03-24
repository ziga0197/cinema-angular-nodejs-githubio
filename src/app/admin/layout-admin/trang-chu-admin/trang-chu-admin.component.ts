import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NguoiDungService } from 'src/app/Services/nguoi-dung/nguoi-dung.service';
import { PhimService } from 'src/app/Services/phim/phim.service';
import { Phim } from 'src/app/Models/Phim';
@Component({
  selector: 'app-trang-chu-admin',
  templateUrl: './trang-chu-admin.component.html',
  styleUrls: ['./trang-chu-admin.component.scss']
})
export class TrangChuAdminComponent implements OnInit {
  count_NguoiDung: number;
  count_Phim: number;
  count_Ve: number;
  DS_phim: Phim[] = [];
  constructor(private _nguoidungService: NguoiDungService, private _phimService: PhimService) {}

  ngOnInit() {
    this.LayDanhSachNguoiDung();
    this.LayDanhSachPhim();
  }

  LayDanhSachNguoiDung() {
    this._nguoidungService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
          this.count_NguoiDung = res.length;
      },
      error => console.log(error)
    );
  }

  LayDanhSachPhim() {
    this._phimService.LayDanhSachPhim().subscribe(
      (res: any) => {
        this.count_Phim = res.length;
        this.DS_phim = res;
      },
      error => console.log(error)
    );
  }

  demo() {
  }



}
