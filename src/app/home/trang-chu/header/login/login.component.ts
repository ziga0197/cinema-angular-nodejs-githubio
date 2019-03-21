import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/_core/model/my-error-state-matcher';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { stringify } from '@angular/core/src/util';
import { CurrentUserService } from 'src/app/services/current-user.service';
import Swal from 'sweetalert2';
import { Location } from '@angular/common';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;
  constructor(private _location: Location, private _user: UserService, private _fb: FormBuilder, private _route: Router, private _userName: CurrentUserService) {
    this.formLogin = this._fb.group({
      tkFormControl: ['', [Validators.required, Validators.pattern('[a-zA-Z]*')]],
      mkFormControl: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]*')]]
    });
  }
  matcher = new MyErrorStateMatcher();
  ngOnInit() {

  }

  onSubmit() {
    console.log(this.formLogin.value);
    this._user.getNguoiDungDangNhap(this.formLogin.value.tkFormControl, this.formLogin.value.mkFormControl)
      .subscribe(
        (res: any) => {
          console.log(res);
          if (this.formLogin.value.tkFormControl == res.TaiKhoan) {
            localStorage.setItem('taikhoan', res.TaiKhoan);
            Swal.fire({
              type: 'success',
              title: 'Đăng nhập thành công',
              showConfirmButton: false,
              timer: 1000
            });
            setTimeout(
              () => {
                this._location.back();
                // this._route.navigate(['']);
              }, 1500
            )

            // truyền tên userName qua header
            this._userName.changeUserName(res.TaiKhoan);
          }
        },
        (err) => {
          console.log(err);
        }
      )
  }
  getErrorMessageTK() {
    return this.formLogin.controls['tkFormControl'].hasError('required') ? 'Không được để trống' :
      this.formLogin.controls['tkFormControl'].hasError('pattern') ? 'Chỉ gồm chữ và số' : '';
  }
  getErrorMessageMK() {
    return this.formLogin.controls['mkFormControl'].hasError('required') ? 'Không được để trống' :
      this.formLogin.controls['mkFormControl'].hasError('pattern') ? 'Chỉ gồm chữ và số' : '';
  }

}
