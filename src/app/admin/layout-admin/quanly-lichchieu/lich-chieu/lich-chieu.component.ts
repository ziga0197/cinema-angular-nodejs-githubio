import { Component, OnInit, Input } from '@angular/core';
import { LichChieu } from 'src/app/_core/model/LichChieu';
import swal from 'sweetalert';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-lich-chieu]',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  @Input() lich_chieu: LichChieu;
  @Input() parentId: any;
  @Input() index: number;
  constructor(private _phimService: PhimService) { }

  ngOnInit() {
  }

  CapNhat() {
    swal('Chức năng đang cập nhật', {
      icon: 'warning',
    });
  }

  Xoa(lichChieu) {
    console.log(this.parentId);
    console.log(lichChieu);
    this._phimService.XoaLichChieu(this.parentId, lichChieu._id).subscribe(
      res => {
        console.log(`xoa thanh cong`);
      },
      err => {
        console.log(err);
      },
      () => {
        console.log(`completed`);
      }
    )
  }

}
