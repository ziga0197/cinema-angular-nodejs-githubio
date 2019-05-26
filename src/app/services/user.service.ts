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
    console.log(taikhoan + matkhau);
    const user = {
      TaiKhoan: taikhoan,
      MatKhau: matkhau
    }
    return this._userHttp.post(`http://localhost:3000/user/login`, user,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      });
  }

  LayDanhSachNguoiDung() {
    return this._userHttp.get(`http://localhost:3000/user/list-user`);
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
    return this._userHttp.post('http://localhost:3000/user/create-user', nguoidung, {
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
    return this._userHttp.put('http://localhost:3000/user/update-user', nguoidung, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  XoaNguoiDung(taikhoan: string) {
    return this._userHttp.delete(`http://localhost:3000/user/delete-user/${taikhoan}`);
  }
}
