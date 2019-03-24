import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { StatusService } from 'src/app/services/status/status.service';

@Component({
  selector: 'app-chitiet-phim',
  templateUrl: './chitiet-phim.component.html',
  styleUrls: ['./chitiet-phim.component.scss']
})
export class ChitietPhimComponent implements OnInit {
  @Input() phim: any;
  @Output() eventCapNhatPhim = new EventEmitter();
  constructor(private _statuService: StatusService) { }

  ngOnInit() {
    this.phim = {
      DanhGia: 0,
      HinhAnh: '',
      MaNhom: '',
      MaPhim: 0,
      MoTa: '',
      NgayKhoiChieu: '',
      TenPhim: '',
      Trailer: '',
    };
  }

  OpenModalEditMovie() {
    this._statuService.ChangeStatusEditMovie(true);
    this.eventCapNhatPhim.emit(this.phim);
  }

}
