import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';
import { PhimService } from 'src/app/services/phim.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from 'src/app/_core/model/genarateRoom.js';
import swal from 'sweetalert';
@Component({
  selector: 'app-ds-lichchieu',
  templateUrl: './ds-lichchieu.component.html',
  styleUrls: ['./ds-lichchieu.component.scss']
})
export class DsLichchieuComponent implements OnInit {
  @ViewChild('btnCloseModal') btnCloseModal: ElementRef;
  ChiTietPhim: PhimAdmin = new PhimAdmin();
  MaPhim = '';
  page = 1;
  itemsPerPage = 6;
  Form_lichChieu: FormGroup;

  constructor(private _activeRouter: ActivatedRoute, private _phimService: PhimService) {
    this.Form_lichChieu = new FormGroup({
      'rap': new FormControl(null, [Validators.required]),
      'lichChieu': new FormControl(null, [Validators.required]),
    });
  }


  ngOnInit() {
    this._activeRouter.params.subscribe(
      (res: any) => {
        this.MaPhim = res.id;
        this._phimService.getChiTietPhim(this.MaPhim).subscribe(
          (phim: any) => {
            this.ChiTietPhim = phim;
          }
        );
      },
      err => console.log(err)
    );
  }

  HandleSubmit() {
    this._phimService.ThemLichChieu(Room).subscribe(
      (res: any) => {
        if (res) {
          this.ChiTietPhim.LichChieu.push({
            Rap: {
              TenRap: this.Form_lichChieu.value.rap
            },
            NgayChieuGioChieu: this.Form_lichChieu.value.lichChieu,
            MaLichChieu: res._id
          });
        }
      },
      (err) => {
        console.log(err);
        swal('Có Lỗiiiii', {
          icon: 'danger',
        })
      },
      () => {
        this._phimService.CapNhatPhim(this.ChiTietPhim).subscribe(
          res => {
            console.log(`cap nhat thanh cong`);
            swal('Thêm lịch chiếu thành công', {
              icon: 'success',
            })
          }
        );

      }
    )
    this.btnCloseModal.nativeElement.click();

  }

  GetAbsoluteIndex(indexOnPage: number, currentPage: number) {
    return this.itemsPerPage * (currentPage - 1) + indexOnPage;
  }

}
