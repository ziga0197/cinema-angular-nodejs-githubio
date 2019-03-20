import { Component, OnInit } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Phim } from 'src/app/_core/model/Phim';

@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {

  constructor(private _chitiet: PhimService, private _param: ActivatedRoute, private _route: Router) { }
  maPhim: string;
  PhimChiTiet: Phim;
  status: string = 'time';

  ngOnInit() {
    // lấy mã phim
    this.getMaPhim();
    // gọi services lấy chi tiết phim
    this._chitiet.getChiTietPhim(this.maPhim).subscribe(
      (res: Phim) => {
        this.PhimChiTiet = res;
        console.log(res);
      }
    )
  }
  getKey(key: string) {
    this.status = key;
  }
  getMaPhim() {
    this._param.paramMap.subscribe(
      (res) => {
        this.maPhim = res.get('maphim');
      }
    )
  }
  // Lấy chi tiết phòng vé
  getPhongVe(stt) {
    this._route.navigate(['/phong-ve', this.PhimChiTiet.LichChieu[stt].MaLichChieu]);
  }
}
