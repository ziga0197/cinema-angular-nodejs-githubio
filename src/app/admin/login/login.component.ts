import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NguoiDungService } from 'src/app/Services/nguoi-dung/nguoi-dung.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  FormLogin: FormGroup;
  constructor(private _nguoidungService: NguoiDungService, private _router: Router) {
  }

  ngOnInit() {
    this.FormLogin = new FormGroup({
      'taikhoan': new FormControl(null),
      'matkhau': new FormControl(null)
    });
  }

  DangNhap() {
    this._nguoidungService.DangNhap(this.FormLogin.value).subscribe(
      (res: any) => {
        if (typeof res === 'object') {
          if (res.MaLoaiNguoiDung.toLowerCase() === 'quantri') {
              swal('Cập Nhật Thành Công', {
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
          swal(res, {
            icon: 'error',
          });
        }
      },
      err => console.log(err)
    );
  }

}
