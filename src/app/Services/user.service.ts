import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NguoiDung } from '../_core/model/NguoiDung';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  MaNhom: string;
  constructor(private _userHttp: HttpClient) {
    this.MaNhom = 'GP02';
   }

  getNguoiDungDangNhap(taikhoan: string, matkhau: string) {
    return this._userHttp.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
  }

  LayDanhSachNguoiDung() {
    return this._userHttp.get(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${this.MaNhom}`);
  }

  // DangNhap(user: any) {
    // tslint:disable-next-line:max-line-length
  //   return this._userHttp.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${user.taikhoan}&matkhau=${user.matkhau}`, undefined, {
  //     headers: {
  //       'Content-Type': 'application/json;charset=UTF-8'
  //     }
  //   });
  // }

  ThemNguoiDung(nguoidung: NguoiDung) {
    nguoidung.MaNhom = this.MaNhom;
    if (nguoidung.MaLoaiNguoiDung === 'KhachHang') {
      nguoidung.TenLoaiNguoiDung = 'Khách hàng';
    } else if (nguoidung.MaLoaiNguoiDung === 'QuanTri') {
      nguoidung.TenLoaiNguoiDung = 'Quản trị';
    }
    return this._userHttp.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/ThemNguoiDung', nguoidung, {
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
    return this._userHttp.post('http://svcy2.myclass.vn/api/QuanLyNguoiDung/CapNhatThongTin', nguoidung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  XoaNguoiDung(taikhoan: string) {
    return this._userHttp.delete(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taikhoan}`);
  }
}
