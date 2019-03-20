import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _userHttp: HttpClient) { }

  getNguoiDungDangNhap(taikhoan, matkhau) {
    this._userHttp.get(`http://sv2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
  }
}
