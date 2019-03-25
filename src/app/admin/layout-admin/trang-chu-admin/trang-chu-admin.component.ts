import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Phim } from 'src/app/_core/model/Phim';
import { PhimService } from 'src/app/services/phim.service';
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
  constructor(private _userService: UserService, private _phimService: PhimService) {}

  ngOnInit() {
    this.LayDanhSachNguoiDung();
    this.LayDanhSachPhim();
  }

  LayDanhSachNguoiDung() {
    this._userService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
          this.count_NguoiDung = res.length;
      },
      error => console.log(error)
    );
  }

  LayDanhSachPhim() {
    this._phimService.getPhim().subscribe(
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
