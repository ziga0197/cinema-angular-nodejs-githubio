import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { StatusService } from 'src/app/Services/status/status.service';
import { Phim } from 'src/app/Models/Phim';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-phim]',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {
  @Input() phim: Phim;
  @Input() index: number;
  @Output() ThongTinPhim = new EventEmitter();
  @Output() EventXoaPhim = new EventEmitter();
  constructor(private _statusService: StatusService) { }

  ngOnInit() {
  }
  OpenModalEditMovie() {
    this._statusService.ChangeStatusEditMovie(true);
  }

  LayThongTinPhim() {
    this.ThongTinPhim.emit(this.phim);
  }
  XoaPhim() {
    this.EventXoaPhim.emit(this.phim);
  }
}
