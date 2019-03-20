import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ve } from '../_core/model/ve';

@Injectable({
  providedIn: 'root'
})
export class PhimService implements OnInit {

  constructor(private _http: HttpClient) { }

  ngOnInit() {

  }
  // lấy thông tin phim hiện lên trang chủ
  getPhim() {
    return this._http.get('http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=GP10', {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  // lấy chi tiết phim
  getChiTietPhim(MaPhim) {
    return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    })
  }
  // Lấy chi tiết phòng vé
  getChiTietPhongVe(MaLichChieu) {
    return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    })
  }
  // Đặt vé
  postDatVe(DatVe: Ve) {
    return this._http.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`, DatVe, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    })
  }
}
