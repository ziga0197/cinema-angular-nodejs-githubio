import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
import { StatusService } from 'src/app/services/status/status.service';


@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-nguoidung]',
  templateUrl: './nguoidung.component.html',
  styleUrls: ['./nguoidung.component.scss']
})
export class NguoidungComponent implements OnInit {
  @Input() nguoidung: NguoiDung;
  @Input() index: number;
  @Output() EventThongTinNguoiDung = new EventEmitter();
  @Output() EventXoaNguoiDung = new EventEmitter();
  constructor( private _status: StatusService) { }

  ngOnInit() {
  }

  // // Gửi thông tin  ra ngoài com quản trị
  LayThongTinNguoiDung() {
    this.EventThongTinNguoiDung.emit(this.nguoidung);
  }

  // Gửi tài khoản người dùng  ra ngoài com quản trị để xóa
  XoaNguoiDung(TaiKhoan: string) {
    this.EventXoaNguoiDung.emit(TaiKhoan);

  }

  OpenModalEditUser() {
    this._status.ChangeStatusEditUser(true);
  }

}
