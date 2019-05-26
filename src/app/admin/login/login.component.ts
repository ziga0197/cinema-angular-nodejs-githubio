import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormLogin: FormGroup;
  constructor(private _userService: UserService, private _router: Router) {
  }

  ngOnInit() {
    this.FormLogin = new FormGroup({
      'taikhoan': new FormControl(null),
      'matkhau': new FormControl(null)
    });
  }

  DangNhap() {
    const user = this.FormLogin.value;
    this._userService.getNguoiDungDangNhap(user.taikhoan, user.matkhau).subscribe(
      (res: any) => {
        console.log(res);
        if (typeof res === 'object') {
          if (res === null) {
            swal("Đăng nhập thất bại", {
              icon: 'error',
            });
          }
          else if (res.MaLoaiNguoiDung.toLowerCase() === 'quantri') {
            swal('Đăng Nhập Thành Công', {
              icon: 'success',
            }).then((value) => {
              localStorage.setItem('admin_login', JSON.stringify(res));
              this._router.navigate(['/admin']);
            });
          } else {
            swal('Người dùng không phải quản trị viên', {
              icon: 'warning',
            });
          }
        } else {
          swal("Đăng nhập thất bại", {
            icon: 'error',
          });
        }
      },
      err => {
        console.log(err);
        swal('Đăng nhập thất bại', {
          icon: 'warning',
        });
      }
    );
  }

}
