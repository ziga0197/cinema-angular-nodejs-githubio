import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NguoiDung } from 'src/app/Models/NguoiDung';
import { StatusService } from 'src/app/Services/status/status.service';

@Component({
  selector: 'app-chitiet-nguoidung',
  templateUrl: './chitiet-nguoidung.component.html',
  styleUrls: ['./chitiet-nguoidung.component.scss']
})
export class ChitietNguoidungComponent implements OnInit {
  @Input() NguoiDung: NguoiDung;
  constructor(private _status: StatusService) {
  }

  ngOnInit() {
    this.NguoiDung = {
      TaiKhoan: '',
      MatKhau: '',
      HoTen: '',
      Email: '',
      SoDT: 0,
      MaLoaiNguoiDung: '',
      MaNhom: '',
      TenLoaiNguoiDung: '',
    };
  }

  OpenModalEditUSer() {
    this._status.ChangeStatusEditUser(true);
  }

}
