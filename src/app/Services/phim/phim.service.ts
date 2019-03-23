import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Phim } from 'src/app/Models/Phim';
@Injectable({
  providedIn: 'root'
})
export class PhimService {
  private MaNhom: string;
  constructor(private _httpClient: HttpClient) {
    this.MaNhom = 'GP03';
  }

  LayDanhSachPhim() {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayDanhSachPhim?MaNhom=${this.MaNhom}`);
  }

  LayChiTietPhim(maPhim: string) {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyPhim/LayChiTietPhim?MaPhim=${maPhim}`);
  }

  XoaPhim(maPhim: string) {
    return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyPhim/XoaPhim?MaPhim=${maPhim}`);
  }

  ThemPhim(phim: Phim) {
    phim.MaNhom = this.MaNhom;
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/ThemPhimMoi', phim , {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  UploadFileImg(img: any) {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile', img);
  }

  CapNhatPhim(phim: Phim) {
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyPhim/CapNhatPhim', phim , {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
}
