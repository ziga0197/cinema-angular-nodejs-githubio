import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { StatusService } from 'src/app/services/status/status.service';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';
import { FormPhimComponent } from './form-phim/form-phim.component';
import { PhimService } from 'src/app/services/phim.service';
import { cleanSession } from 'selenium-webdriver/safari';


@Component({
  selector: 'app-quanly-phim',
  templateUrl: './quanly-phim.component.html',
  styleUrls: ['./quanly-phim.component.scss']
})
export class QuanlyPhimComponent implements OnInit {
  @ViewChild('formPhim') formPhim: FormPhimComponent;
  DS_Phim: PhimAdmin[] = [];
  ThongTinPhim: PhimAdmin;
  statusEditMovie = false;
  page = 1;
  itemsPerPage = 6;
  constructor(private _phimService: PhimService, private _statusService: StatusService) { }

  ngOnInit() {
    this.LayDanhSachPhim();
  }

  OpenModalAddMovie() {
    this._statusService.ChangeStatusEditMovie(false);
  }

  GetAbsoluteIndex(indexOnPage: number, currentPage: number) {
    return this.itemsPerPage * (currentPage - 1) + indexOnPage;
  }

  LayThongTinPhim(phim: PhimAdmin) {
    this.ThongTinPhim = phim;
  }

  TimKiemPhim(e) {
    const tenPhim = e.target.value.toLowerCase().trim();
    if (tenPhim.length > 0) {
      this.DS_Phim = this.DS_Phim.filter((phim) => {
        return phim.TenPhim.toLowerCase().trim().indexOf(tenPhim) !== -1;
      });
    } else {
      this.LayDanhSachPhim();
    }
  }

  LayDanhSachPhim() {
    this._phimService.getPhim().subscribe(
      (res: any) => {
        this.DS_Phim = res;
        console.log(res);
        for (const phim of this.DS_Phim) {
          const embedLink = phim.Trailer.replace('watch?v=', 'embed/');
          phim.Trailer = embedLink;
        }
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  ThemPhim(data: any) {
    const phim = data.phim;
    this._phimService.ThemPhim(phim).subscribe(
      (them_res: any) => {
        if (typeof them_res === 'object') {
          swal('Thêm Thành Công', {
            icon: 'success',
          });
          this.LayDanhSachPhim();
          this.formPhim.btnCloseModal.nativeElement.click();
        } else {
          swal(them_res, {
            icon: 'error',
          });
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  CapNhatPhim(phim: any) {
    console.log(phim);
    this._phimService.CapNhatPhim(phim).subscribe(
      (res: any) => {
        if (typeof res === 'object') {
          swal('Cập Nhật Thành Công', {
            icon: 'success',
          });
          this.LayDanhSachPhim();
          this.formPhim.btnCloseModal.nativeElement.click();
        } else {
          swal(res, {
            icon: 'error',
          });
        }
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  XoaPhim(phim: any) {
    console.log(phim._id);
    swal({
      title: 'Bạn có chắc ?',
      text: `Xoá phim  ${phim.TenPhim}`,
      icon: 'warning',
      dangerMode: true,
      buttons: ['Hủy', 'Xóa'],
    }).then((willDelete) => {
      if (willDelete) {
        this._phimService.XoaPhim(phim._id).subscribe(
          (res: any) => {
            swal('Xóa Thành Công', {
              icon: 'success',
            });
            this.LayDanhSachPhim();
          },
          (error: any) => {
            console.log(error);
          });
      }
    });
  }

  HandleCapNhatPhim(data: any) {
    const phim = data.phim;
    this.CapNhatPhim(phim);
    // const imageFile  = data.file;
    // if (imageFile !== '') {
    //   this.HandleUploadImage(phim.TenPhim, imageFile).subscribe(
    //     (res: any) => {
    //       this.CapNhatPhim(phim);
    //     },
    //     (err: any) => {
    //       console.log(err);
    //     }
    //   );
    // } else {
    //   this.CapNhatPhim(phim);
    // }
  }

  HandleUploadImage(tenPhim: any, file: File) {
    const formData = new FormData();
    formData.append('Files', file);
    formData.append('TenPhim', tenPhim);
    return this._phimService.UploadFileImg(formData);
  }

}
