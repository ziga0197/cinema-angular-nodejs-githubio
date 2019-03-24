// tslint:disable-next-line:max-line-length
import { Component, OnInit, Input, EventEmitter, Output, ViewChild, ElementRef, OnChanges} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// models
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
// services
import { StatusService } from 'src/app/services/status/status.service';



@Component({
  selector: 'app-form-nguoidung',
  templateUrl: './form-nguoidung.component.html',
  styleUrls: ['./form-nguoidung.component.scss']
})
export class FormNguoidungComponent implements OnInit, OnChanges {
  @Input() iNguoiDung: NguoiDung; // nhận thông tin người dùng truyền vào khi nhấn sửa
  @Output() EventThemNguoiDung = new EventEmitter();
  @Output() EventCapNhatNguoiDung = new EventEmitter();
  @ViewChild('btnCloseModal') btnCloseModal: ElementRef;
  @ViewChild('pass') pass: ElementRef;
  Form_nguoiDung: FormGroup;
  NguoiDung: NguoiDung;
  StatusEditUSer: boolean;

  constructor( private _status: StatusService) {
      // khởi tạo form
      this.Form_nguoiDung = new FormGroup({
        'TaiKhoan': new FormControl(null, [Validators.required, Validators.minLength(6), Validators.pattern(/^[a-zA-Z0-9_-]*$/)]),
        'MatKhau': new FormControl(null, [Validators.required, Validators.minLength(8), Validators.pattern(/^\S*$/)]),
        'HoTen': new FormControl(null, Validators.required),
        'Email': new FormControl(null, [Validators.required, Validators.email]),
        'SoDT': new FormControl(null, Validators.pattern(/^[0-9]{9,10}$/)),
        'MaLoaiNguoiDung': new FormControl(null, this.ValidatorSelectTypeUser.bind(this))
      });
  }

  ngOnChanges() {
    if (this.StatusEditUSer) {
         // set value cho form  là người dùng được truyền vào
         this.LayThongTinCanCapNhat();
    }
  }

  ngOnInit() {
    // khởi tạo giá trị ban đầu cho input
    this.iNguoiDung = {
      TaiKhoan: '',
      MatKhau: '',
      HoTen: '',
      Email: '',
      SoDT: 0,
      MaLoaiNguoiDung: '',
      MaNhom: '',
      TenLoaiNguoiDung: '',
    };

    // lấy status edit , nếu false thì reset form để thêm mới
    this._status.OutPutStatusUser.subscribe((res: any) => {
      this.StatusEditUSer = res;
      if (this.StatusEditUSer === false) {
        this.Form_nguoiDung.reset();
      } else if (this.StatusEditUSer === true) {
         // set value cho form  là người dùng được truyền vào
        this.LayThongTinCanCapNhat();
      }
    });
  }

  // alias cho form
  f() {
    return  this.Form_nguoiDung.controls;
  }
  // validator cho mã loại người dùng
  ValidatorSelectTypeUser(maNguoiDung: FormControl) {
    if ( maNguoiDung.value === null && (maNguoiDung.untouched || maNguoiDung.pristine)) {
      return {'required': true};
    } else if ( maNguoiDung.value !== null && (maNguoiDung.touched || maNguoiDung.dirty)) {
      return null;
    }
  }

 // ẩn hiện password
  ShowPassword() {
    this.pass.nativeElement.setAttribute('type', 'text');
   }
   HidePassWord() {
     this.pass.nativeElement.setAttribute('type', 'password');
  }

  // Xử kí sự kiện sumit
  HandleSubmit() {
    if (this.StatusEditUSer) {
      this.CapNhatNguoiDung();
    } else {
      this.ThemNguoiDung();
    }
  }

  // truyền thông tin người dùng mới ra ngoài com quản trị
  ThemNguoiDung() {
    const formValue = this.Form_nguoiDung.value;
    if (formValue.MaLoaiNguoiDung === 'QuanTri') {
      formValue.TenLoaiNguoiDung = 'Quản Trị';
    } else if (formValue.MaLoaiNguoiDung === 'KhachHang') {
      formValue.TenLoaiNguoiDung = 'Khách Hàng';
    }

    this.EventThemNguoiDung.emit(formValue);
  }

  // Lấy thông tin người dùng cần cập nhật
  LayThongTinCanCapNhat() {
    this.Form_nguoiDung.setValue({
      'TaiKhoan': this.iNguoiDung.TaiKhoan,
      'MatKhau': this.iNguoiDung.MatKhau,
      'HoTen': this.iNguoiDung.HoTen,
      'Email': this.iNguoiDung.Email,
      'SoDT': this.iNguoiDung.SoDT,
      'MaLoaiNguoiDung': this.iNguoiDung.MaLoaiNguoiDung,
    });
  }

  // truyền thông tin người dùng cần sửa ra ngoài com qủan trị
  CapNhatNguoiDung() {
    this.EventCapNhatNguoiDung.emit(this.Form_nguoiDung.value);
  }

}
