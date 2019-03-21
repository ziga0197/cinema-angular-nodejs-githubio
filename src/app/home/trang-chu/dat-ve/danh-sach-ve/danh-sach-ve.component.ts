import { Component, OnInit, Output } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { ActivatedRoute } from '@angular/router';
import { ListGhe } from 'src/app/_core/model/list-ghe';
import { Ghe } from 'src/app/_core/model/ghe';
import { Ve } from 'src/app/_core/model/ve';

@Component({
  selector: 'app-danh-sach-ve',
  templateUrl: './danh-sach-ve.component.html',
  styleUrls: ['./danh-sach-ve.component.scss']
})
export class DanhSachVeComponent implements OnInit {

  constructor(private _http: PhimService, private _active: ActivatedRoute) { }
  MaLichChieu: number;
  DSGhe: ListGhe;
  MangGheDat: Ghe[] = [];
  TongTien: number;
  VeDat: Ve = {
    MaLichChieu: 0,
    TaiKhoanNguoiDung: 'ads',
    DanhSachVe: [
      { MaGhe: 1, GiaVe: 75000 }
    ]
  };

  ngOnInit() {
    this.getMaLichChieu();
    this.getPhongVe();

  }

  // Lấy mã lịch chiếu
  getMaLichChieu() {
    this._active.paramMap.subscribe(
      (param) => {
        this.MaLichChieu = +param.get('malichchieu');
      }
    )
  }
  // Lấy chi tiết phòng vé
  getPhongVe() {
    this._http.getChiTietPhongVe(this.MaLichChieu).subscribe(
      (res: ListGhe) => {
        this.DSGhe = res;
        // console.log(this.DSGhe);
      },
      (err) => {
        // console.log(err);
      }
    )
  }
  // Nhận output
  datGhe(outputGhe: Ghe) {
    if (outputGhe.DaDat == true) {
      this.MangGheDat.push(outputGhe);
      // 
    } else {
      let index = this.MangGheDat.indexOf(outputGhe, 0);
      this.MangGheDat.splice(index, 1);
    }
    // console.log(outputGhe);
    // console.log(this.MangGheDat);
    // Hiện thành tiền
    this.tinhTien();
  }
  // Tính giá vé
  tinhTien() {
    let sum = 0;
    this.MangGheDat.forEach(gheDaDat => {
      sum += gheDaDat.GiaVe;
    });
    this.TongTien = sum;
  }
  // Đặt vé
  datVe() {
    this.VeDat.MaLichChieu = this.MaLichChieu;
    this.VeDat.TaiKhoanNguoiDung = 'darkness';
    console.log(this.VeDat);
    this._http.postDatVe(this.VeDat).subscribe(
      (res) => {
        console.log(`2` + res);
      },
      (err) => {
        console.log(err);
      }
    )
  }
}
