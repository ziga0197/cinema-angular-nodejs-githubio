import { Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NguoiDung } from 'src/app/Models/NguoiDung';

@Injectable({
  providedIn: 'root'
})
export class NguoiDungService {
  MaNhom: string;
  constructor(private _httpClient: HttpClient) {
    this.MaNhom = 'GP02';
  }

  LayDanhSachNguoiDung() {
    return this._httpClient.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${this.MaNhom}`);
  }

  DangNhap(user: any) {
    // tslint:disable-next-line:max-line-length
    return this._httpClient.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.taikhoan}&matkhau=${user.matkhau}`, undefined, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  ThemNguoiDung(nguoidung: NguoiDung) {
    nguoidung.MaNhom = this.MaNhom;
    if (nguoidung.MaLoaiNguoiDung === 'KhachHang') {
      nguoidung.TenLoaiNguoiDung = 'Khách hàng';
    } else if (nguoidung.MaLoaiNguoiDung === 'QuanTri') {
      nguoidung.TenLoaiNguoiDung = 'Quản trị';
    }
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung', nguoidung, {
      headers: {
          'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  CapNhatNguoiDung(nguoidung: NguoiDung) {
    nguoidung.MaNhom = this.MaNhom;
    if (nguoidung.MaLoaiNguoiDung === 'KhachHang') {
      nguoidung.TenLoaiNguoiDung = 'Khách hàng';
    } else if (nguoidung.MaLoaiNguoiDung === 'QuanTri') {
      nguoidung.TenLoaiNguoiDung = 'Quản trị';
    }
    return this._httpClient.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin', nguoidung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  XoaNguoiDung(taikhoan: string) {
    return this._httpClient.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`);
  }
}
