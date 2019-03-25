import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StatusService } from 'src/app/services/status/status.service';
import { NguoiDung } from 'src/app/_core/model/NguoiDung';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.scss']
})
export class FormAdminComponent implements OnInit {
  @Input() iAdmin: NguoiDung;
  @Output() EventCapNhatAdmin = new EventEmitter();
  Form_admin: FormGroup;
  constructor(private _statusService: StatusService) {
     // khởi tạo form
     this.Form_admin = new FormGroup({
      'TaiKhoan': new FormControl('asdasda', [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
      'MatKhau': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^\S*$/)]),
      'HoTen': new FormControl(null, Validators.required),
      'Email': new FormControl(null, [Validators.required, Validators.email]),
      'SoDT': new FormControl(null, Validators.pattern(/^[0-9]{9,10}$/)),
      'MaLoaiNguoiDung': new FormControl(null)
    });
   }

  ngOnInit() {
    this._statusService.OutputStatusAdmin.subscribe(
      (res: any) => {
        if (res === 'edit') {
          this.Form_admin.setValue({
            'TaiKhoan': this.iAdmin.TaiKhoan,
            'MatKhau': this.iAdmin.MatKhau,
            'HoTen': this.iAdmin.HoTen,
            'Email': this.iAdmin.Email,
            'SoDT': this.iAdmin.SoDT,
            'MaLoaiNguoiDung': this.iAdmin.MaLoaiNguoiDung,
          });
        }
      },
      error => console.log(error)
    );
  }

  // alias cho form
  f() {
    return  this.Form_admin.controls;
  }

  CapNhat() {
    console.log(this.Form_admin.value);
    this.EventCapNhatAdmin.emit(this.Form_admin.value);
  }

  CloseModalEditAdmin() {
    this._statusService.ChangeStatusEditAdmin('normal');
  }



}
