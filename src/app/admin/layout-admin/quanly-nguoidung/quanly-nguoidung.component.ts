import { Component, OnInit, ViewChild} from '@angular/core';
// models
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
// service
import { StatusService } from 'src/app/services/status/status.service';
import { FormNguoidungComponent } from './form-nguoidung/form-nguoidung.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-quanly-nguoidung',
  templateUrl: './quanly-nguoidung.component.html',
  styleUrls: ['./quanly-nguoidung.component.scss']
})
export class QuanlyNguoidungComponent implements OnInit {
  DSND: NguoiDung[] = [];
  ThongTinNguoiDung: NguoiDung;
  currentAdminLogin: NguoiDung;
  page = 1;
  itemsPerPage = 10;
  @ViewChild('formNguoiDung') formNguoiDung: FormNguoidungComponent;
  constructor(private _userService: UserService, private _status: StatusService) {
    this.currentAdminLogin = JSON.parse(localStorage.getItem('admin_login'));
  }

  ngOnInit() {
    this.LayDanhSachNguoiDung();
  }
  OpenModalAddUser() {
    this._status.ChangeStatusEditUser(false);
  }

  GetAbsoluteIndex(indexOnPage: number, currentPage: number) {
    return this.itemsPerPage * (currentPage - 1) + indexOnPage;
  }

  LayThongTinNguoiDung(nguoidung: NguoiDung) {
    this.ThongTinNguoiDung = nguoidung;
  }

  LayDanhSachNguoiDung() {
    this._userService.LayDanhSachNguoiDung().subscribe(
      (res: any) => {
        this.DSND = res;
        const index = this.DSND.findIndex((nguoidung) => {
          return nguoidung.TaiKhoan === this.currentAdminLogin.TaiKhoan;
        });
        this.DSND.splice(index, 1);
      },
      (err: any) => {console.log(err); }
    );
  }

  TimKiemTaiKhoan(e) {
    const TaiKhoan = e.target.value.trim().toLowerCase();
    let DS_TimKiem: NguoiDung[] = [...this.DSND];
    if (TaiKhoan.length > 0) {
         DS_TimKiem = this.DSND.filter((nguoidung) => {
          return nguoidung.TaiKhoan.trim().toLowerCase().indexOf(TaiKhoan) !== -1;
      });
      this.DSND = DS_TimKiem;
    } else {
      this.LayDanhSachNguoiDung();
    }
  }

  ThemNguoiDung(nguoidung: NguoiDung) {
    this._userService.ThemNguoiDung(nguoidung).subscribe(
      (res: any) => {
        if (typeof res  === 'object') {
          swal({
            title: `Tạo người dùng thành công`,
            icon: 'success',
          });
          this.LayDanhSachNguoiDung();
          this.formNguoiDung.btnCloseModal.nativeElement.click();
        } else if (typeof res === 'string') {
          swal({
            title: res,
            icon: 'error',
          });
        }
      },
      (error: any) => {
        console.log(error);
      });
  }

  CapNhatNguoiDung(nguoidung: NguoiDung) {
    this._userService.CapNhatNguoiDung(nguoidung).subscribe(
      (res: any) => {
        if (typeof res  === 'object') {
          swal({
            title: `Cập nhật người dùng thành công`,
            icon: 'success',
          });
          this.LayDanhSachNguoiDung();
        } else if (typeof res === 'string') {
          swal({
            title: res,
            icon: 'error',
          });
        }
      },
      (error: any) => {
        console.log(error);
      });
  }

  XoaNguoiDung(TaiKhoan: string) {
    swal({
      title: 'Bạn có chắc ?',
      text: `Xoá người dùng ${TaiKhoan}`,
      icon: 'warning',
      dangerMode: true,
      buttons: ['Hủy', 'Xóa'],
    }).then((willDelete) => {
      if (willDelete) {
        this._userService.XoaNguoiDung(TaiKhoan).subscribe(
          (res: any) => {
            swal(res, {
              icon: 'success',
            });
            this.LayDanhSachNguoiDung();
          },
          (error: any) => {
            console.log(error);
          });
      }
    });

  }

}
