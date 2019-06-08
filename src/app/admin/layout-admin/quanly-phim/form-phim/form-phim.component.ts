import { Component, OnInit, Output, EventEmitter, ElementRef, ViewChild, Input, OnChanges } from '@angular/core';
import { StatusService } from 'src/app/services/status/status.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-form-phim',
  templateUrl: './form-phim.component.html',
  styleUrls: ['./form-phim.component.scss'],
  providers: [DatePipe],
})
export class FormPhimComponent implements OnInit, OnChanges {
  @Input() iPhim: PhimAdmin;
  @Output() EventThemPhim = new EventEmitter();
  @Output() EventCapNhatPhim = new EventEmitter();
  @ViewChild('imageInput') imageInput: ElementRef;
  @ViewChild('dateInput') dateInput: ElementRef;
  @ViewChild('btnCloseModal') btnCloseModal: ElementRef;
  editStatusMovie = false;
  Form_phim: FormGroup;

  constructor(private _statusService: StatusService, private _phim: PhimService, private _datePipe: DatePipe) {
    // khởi tạo form
    this.Form_phim = new FormGroup({
      'TenPhim': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'HinhAnh': new FormControl(null, [Validators.required, Validators.minLength(10)]),
      'MoTa': new FormControl(null, [Validators.required, Validators.minLength(20)]),
      'NgayKhoiChieu': new FormControl(null, [Validators.required, this.ValidatorForOpenDay.bind(this)]),
      'DanhGia': new FormControl(0),
      // tslint:disable-next-line:max-line-length
      'Trailer': new FormControl(null, [Validators.required, Validators.pattern(/^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(watch\?v=|watch\?.+&v=))((\w|-){11})?$/)]),
    });
   }

  ngOnChanges() {
    if (this.editStatusMovie) {
      const watchLink = this.iPhim.Trailer.replace('embed/', 'watch?v=');
      const OpenDate = new Date(this.iPhim.NgayKhoiChieu);
      const NewOpenDate = this._datePipe.transform(OpenDate, 'yyyy-MM-dd');
      this.Form_phim.setValue({
        'TenPhim': this.iPhim.TenPhim,
        'HinhAnh': this.iPhim.HinhAnh,
        'MoTa': this.iPhim.MoTa,
        'NgayKhoiChieu': NewOpenDate,
        'DanhGia': this.iPhim.DanhGia,
        'Trailer': watchLink,
      });
    }
  }

  ngOnInit() {
    // Khởi tạo giá trị ban đầu cho iphim 
    this.iPhim = {
      'MaPhim' : -1,
      'TenPhim': '',
      'HinhAnh': '',
      'MoTa': '',
      'NgayKhoiChieu': 'Fri Mar 22 2019 18:12:35 GMT+0700 (Giờ Đông Dương)',
      'DanhGia': 0,
      'Trailer': '',
      'MaNhom' : '',
      'LichChieu': []
    };

    // Lấy trạng thái edit phim
    this._statusService.OutputStatusMovie.subscribe(
      (res: any) => {
        this.editStatusMovie = res;
        if (this.editStatusMovie === true) {
          const watchLink = this.iPhim.Trailer.replace('embed/', 'watch?v=');
          const OpenDate = new Date(this.iPhim.NgayKhoiChieu);
          const NewOpenDate = this._datePipe.transform(OpenDate, 'yyyy-MM-dd');
          this.Form_phim.setValue({
            'TenPhim': this.iPhim.TenPhim ,
            'HinhAnh': '',
            'MoTa': this.iPhim.MoTa,
            'NgayKhoiChieu': NewOpenDate,
            'DanhGia': this.iPhim.DanhGia,
            'Trailer': watchLink,
          });
        } else {
          this.Form_phim.reset();
        }
      },
      (error) => {console.log(error); }
    );
  }

  // alias cho form
  f() {
    return this.Form_phim.controls;
  }

  // validator cho ngày khởi chiếu
  ValidatorForOpenDay(NgayKhoiChieu: FormControl) {
    const now = new Date();
    const OpenDay = new Date(NgayKhoiChieu.value);
    if (!this.editStatusMovie) {
      if (NgayKhoiChieu.value !== null) {
        if (now.getTime() > OpenDay.getTime()) {
          return {invalid_date: true};
        } else {
          return null;
        }
      }
    } else {
      return null;
    }
  }

  ValidatoForImage(HinhAnh: FormControl) {
    if (this.editStatusMovie) {
      return null;
    } else {
      if ( HinhAnh.value === null && (HinhAnh.untouched || HinhAnh.pristine)) {
        return {'required': true};
      } else if ( HinhAnh.value !== null && (HinhAnh.touched || HinhAnh.dirty)) {
        return null;
      }
    }

  }


  // Xử lý submit form
  HandleSubmit() {
    if (this.editStatusMovie) {
      this.CapNhatPhim();
    } else {
      this.ThemPhim();
    }
  }

  // Xử lý file hình ảnh
  HandleFileUpload() {
    const Image_el = this.imageInput.nativeElement;
    let imageFileresult: File;

    if (Image_el.files && Image_el.files[0]) {
      imageFileresult = Image_el.files[0];
    }
    return imageFileresult;
  }

  ThemPhim() {
    
    this.EventThemPhim.emit({phim: this.Form_phim.value});
  }

  CapNhatPhim() {
    const formValue = this.Form_phim.value;
    const phimCapNhat = {...this.iPhim, ...formValue};
    phimCapNhat.HinhAnh = formValue.HinhAnh;
    this.EventCapNhatPhim.emit({phim: phimCapNhat});
  }

}
