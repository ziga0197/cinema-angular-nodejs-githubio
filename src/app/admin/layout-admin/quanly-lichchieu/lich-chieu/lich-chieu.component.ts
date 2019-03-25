import { Component, OnInit, Input } from '@angular/core';
import { LichChieu } from 'src/app/_core/model/LichChieu';
import swal from 'sweetalert';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-lich-chieu]',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  @Input() lich_chieu: LichChieu;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

  CapNhat() {
    swal('Chức năng đang cập nhật', {
      icon: 'warning',
    });
  }

}
