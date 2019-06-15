import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { Phim } from 'src/app/_core/model/Phim';
import { BinhLuan } from 'src/app/_core/model/BinhLuan';
import { CurrentUserService } from 'src/app/services/current-user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-chitietphim',
  templateUrl: './chitietphim.component.html',
  styleUrls: ['./chitietphim.component.scss']
})
export class ChitietphimComponent implements OnInit {

  constructor(
    private _chitiet: PhimService,
    private _param: ActivatedRoute,
    private _route: Router,
    private _userName: CurrentUserService
  ) { }

  @ViewChild('lichchieu') lichChieu: ElementRef;
  maPhim: string;
  PhimChiTiet: Phim;
  status: string = 'time';
  Comments: BinhLuan[] = [];
  userName: string;

  ngOnInit() {
    // lấy mã phim
    this.getMaPhim();
    // get comment
    this.getCommentFromService(this.maPhim);
    // gọi services lấy chi tiết phim
    this._chitiet.getChiTietPhim(this.maPhim).subscribe(
      (res: Phim) => {
        this.PhimChiTiet = res;
      }
    );

    this.getUserName();
  }

  getUserName() {
    this.userName = localStorage.getItem('taikhoan');
    // nhận tên username
    this._userName.currentUser.subscribe(
      (userName) => {
        this.userName = userName;
      }
    )
  }

  getKey(key: string) {
    this.status = key;
  }
  getMaPhim() {
    this._param.paramMap.subscribe(
      (res) => {
        this.maPhim = res.get('maphim');
      }
    )
  }
  // Lấy chi tiết phòng vé
  getPhongVe(stt) {
    console.log(stt);
    console.log(this.PhimChiTiet.LichChieu[stt].MaLichChieu);
    this._route.navigate(['/phong-ve', this.maPhim ,this.PhimChiTiet.LichChieu[stt].MaLichChieu]);
  }

  scrollToElement() {
    this.lichChieu.nativeElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  }

  onEnter(value) {
    const comment = value.target.value;
    const newComment: BinhLuan = {
      MaPhim: this.maPhim,
      TaiKhoanNguoiDung: this.userName,
      Comments: comment,
    }
    value.target.value = '';
    console.log(newComment);
    if (this.checkCommentExist(newComment)) {
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'Bạn đã comment phim này rồi mà',
        footer: '<a href>Why do I have this issue?</a>'
      })
    } else {
      this.Comments.push(newComment);
      this._chitiet.ThemBinhLuan(newComment).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  getCommentFromService(MaPhim){
    this._chitiet.getBinhLuan(MaPhim).subscribe(
      (res: any) => {
        console.log(res);
        this.Comments = res;
      },
      err => {
        console.log(err)
      }
    )
  }

  checkCommentExist(comment: BinhLuan) {
    const isExisted = this.Comments.find((oldComment: BinhLuan) => {
      return oldComment.TaiKhoanNguoiDung == comment.TaiKhoanNguoiDung;
    });
    console.log(isExisted);
    return isExisted;
  }
}
