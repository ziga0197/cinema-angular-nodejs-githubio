import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ve } from '../_core/model/ve';
import { PhimAdmin } from '../_core/model/PhimAdmin';

@Injectable({
  providedIn: 'root'
})
export class PhimService implements OnInit {
  private MaNhom: string;
  constructor(private _http: HttpClient) {
    this.MaNhom = 'GP10';
  }

  ngOnInit() {

  }
  // lấy thông tin phim hiện lên trang chủ
  getPhim() {
    // return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=${this.MaNhom}`, {
    //   headers: {
    //     'Content-Type': 'application/json;charset=UTF-8'
    //   }
    // });
    return this._http.get(`http://localhost:3000/list-phim`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  // lấy chi tiết phim
  getChiTietPhim(MaPhim) {
    // return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${MaPhim}`, {
    //   headers: {
    //     'Content-type': 'application/json;charset=UTF-8'
    //   }
    // });
    return this._http.get(`http://localhost:3000/detail/${MaPhim}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }
  // Lấy chi tiết phòng vé
  getChiTietPhongVe(MaLichChieu) {
    return this._http.get(`http://svcy2.myclass.vn/api/QuanLyPhim/ChiTietPhongVe?MaLichChieu=${MaLichChieu}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }
  // Đặt vé
  postDatVe(DatVe: Ve) {
    return this._http.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`, DatVe, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }

  XoaPhim(maPhim: string) {
    console.log(maPhim);
    return this._http.delete(`http://localhost:3000/delete-phim/${maPhim}`);
  }

  ThemPhim(phim: PhimAdmin) {
    phim.MaNhom = this.MaNhom;
    return this._http.post('http://localhost:3000/create-list', phim , {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  UploadFileImg(img: any) {
    return this._http.post('http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile', img);
  }

  CapNhatPhim(phim: PhimAdmin) {
    return this._http.put('http://localhost:3000/update-phim', phim , {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
}