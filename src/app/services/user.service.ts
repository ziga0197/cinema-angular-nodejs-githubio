import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _userHttp: HttpClient) { }

  getNguoiDungDangNhap(taikhoan:string, matkhau:string) {
    return this._userHttp.post(`http://svcy2.myclass.vn/api/QuanLyNguoiDung/DangNhap?taikhoan=${taikhoan}&matkhau=${matkhau}`,
      {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8'
        }
      })
  }
}
