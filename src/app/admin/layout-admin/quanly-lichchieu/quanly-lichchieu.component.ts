import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/Services/phim/phim.service';
import { Phim } from 'src/app/Models/Phim';

@Component({
  selector: 'app-quanly-lichchieu',
  templateUrl: './quanly-lichchieu.component.html',
  styleUrls: ['./quanly-lichchieu.component.scss']
})
export class QuanlyLichchieuComponent implements OnInit {
  DS_Phim: Phim[] = [];
  page = 1;
  itemsPerPage = 6;
  constructor(private _phimService: PhimService) { }

  ngOnInit() {

    this.LayDanhSachPhim();
  }

  LayDanhSachPhim() {
    this._phimService.LayDanhSachPhim().subscribe(
      (res: any) => {
        this.DS_Phim = res;
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  GetAbsoluteIndex(indexOnPage: number, currentPage: number) {
    return this.itemsPerPage * (currentPage - 1) + indexOnPage;
  }

  TimKiemPhim(e) {
    const tenPhim = e.target.value.toLowerCase().trim();
    if (tenPhim.length > 0) {
      this.DS_Phim = this.DS_Phim.filter((phim) => {
        return phim.TenPhim.toLowerCase().trim().indexOf(tenPhim) !== -1;
      });
    } else {
      this.LayDanhSachPhim();
    }
  }

}
