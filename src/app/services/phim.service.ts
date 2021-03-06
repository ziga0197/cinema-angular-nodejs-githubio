import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ve } from '../_core/model/ve';
import { PhimAdmin } from '../_core/model/PhimAdmin';
import { Room } from '../_core/model/genarateRoom.js';
import { BinhLuan } from '../_core/model/BinhLuan.js';
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
    return this._http.get(`http://localhost:3000/list-phim`, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }
  // lấy chi tiết phim
  getChiTietPhim(MaPhim) {
    return this._http.get(`http://localhost:3000/detail/${MaPhim}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }
  // Lấy chi tiết phòng vé
  getChiTietPhongVe(MaLichChieu) {
    return this._http.get(`http://localhost:3000/room/${MaLichChieu}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }
  // Đặt vé
  // postDatVe(DatVe: Ve) {
  //   return this._http.post(`http://svcy2.myclass.vn/api/QuanLyDatVe/DatVe`, DatVe, {
  //     headers: {
  //       'Content-type': 'application/json;charset=UTF-8'
  //     }
  //   });
  // }

  XoaPhim(maPhim: string) {
    console.log(maPhim);
    return this._http.delete(`http://localhost:3000/delete-phim/${maPhim}`);
  }

  ThemPhim(phim: PhimAdmin) {
    phim.MaNhom = this.MaNhom;
    return this._http.post('http://localhost:3000/create-list', phim, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  UploadFileImg(img: any) {
    return this._http.post('http://svcy2.myclass.vn/api/QuanLyPhim/UploadFile', img);
  }

  CapNhatPhim(phim: PhimAdmin) {
    return this._http.put('http://localhost:3000/update-phim', phim, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  ThemLichChieu(room: any) {
    return this._http.post(`http://localhost:3000/room/create-room`, room, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

  XoaLichChieu(parentId, childId) {
    return this._http.delete(`http://localhost:3000/room/delete-room/${parentId}/${childId}`);
  }

  CapNhatChiTietPhongVe(room) {
    return this._http.put(`http://localhost:3000/room/update-room`, room, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    });
  }

  ThemBinhLuan(binhluan: BinhLuan) {
    return this._http.post(`http://localhost:3000/binhluan/create-comment`, binhluan, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

  getBinhLuan(MaPhim){
    return this._http.get(`http://localhost:3000/binhluan/${MaPhim}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }

  DatVe(ve: Ve) {
    return this._http.post(`http://localhost:3000/ticket/create-ticket`, ve, {
      headers: {
        'Content-Type': 'application/json;charset=UTF-8'
      }
    })
  }

  getLichSuGiaoDich(taikhoan){
    return this._http.get(`http://localhost:3000/ticket/${taikhoan}`, {
      headers: {
        'Content-type': 'application/json;charset=UTF-8'
      }
    });
  }
}