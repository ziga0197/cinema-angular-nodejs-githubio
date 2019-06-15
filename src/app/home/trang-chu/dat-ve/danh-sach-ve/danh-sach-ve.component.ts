import { Component, OnInit, Output } from '@angular/core';
import { PhimService } from 'src/app/services/phim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ListGhe } from 'src/app/_core/model/list-ghe';
import { Ghe } from 'src/app/_core/model/ghe';
import { Ve } from 'src/app/_core/model/ve';
import Swal from 'sweetalert2';
import { CurrentUserService } from 'src/app/services/current-user.service';


@Component({
	selector: 'app-danh-sach-ve',
	templateUrl: './danh-sach-ve.component.html',
	styleUrls: ['./danh-sach-ve.component.scss']
})
export class DanhSachVeComponent implements OnInit {

	constructor(
		private _http: PhimService,
		private _active: ActivatedRoute,
		private _router: Router,
		private _user: CurrentUserService,
		private _chitiet: PhimService
	) { }
	MaLichChieu: string;
	MaPhim: string;
	DSGhe: any;
	MangGheDat: Ghe[] = [];
	DanhSachVeDat: { MaGhe: number, GiaVe: number }[] = [];
	TongTien: number;
	VeDat: Ve;
	rooms: any;
	user: string;

	ngOnInit() {
		this.getMaLichChieu();
		this.getPhongVe();
		this.getUserName();
		console.log(this.MaPhim);
	}

	// Lấy mã lịch chiếu
	getMaLichChieu() {
		this._active.paramMap.subscribe(
			(param) => {
				this.MaLichChieu = param.get('malichchieu');
				this.MaPhim = param.get('maphim');
				console.log(this.MaLichChieu);
			}
		)
	}
	// Lấy chi tiết phòng vé
	getPhongVe() {
		this._http.getChiTietPhongVe(this.MaLichChieu).subscribe(
			(res: any) => {
				if (res) {
					console.log(res);
					this.DSGhe = res;
				}
			},
			(err) => {
				console.log(err);
			}
		)
	}
	// Nhận output
	datGhe(outputGhe: Ghe) {
		const veDat = {
			MaGhe: outputGhe.MaGhe,
			GiaVe: outputGhe.GiaVe
		}
		// console.log(outputGhe);
		if (outputGhe.DaDat == true) {
			this.MangGheDat.push(outputGhe);
			this.DanhSachVeDat.push(veDat);
			// 
		} else {
			const index = this.MangGheDat.indexOf(outputGhe, 0);
			const indexOfVeDat = this.DanhSachVeDat.indexOf(veDat, 0);
			this.MangGheDat.splice(index, 1);
			this.DanhSachVeDat.splice(indexOfVeDat, 1);
		}
		// console.log(outputGhe);
		console.log(this.MangGheDat);
		// Hiện thành tiền
		this.tinhTien();
	}
	// Tính giá vé
	tinhTien() {
		let sum = 0;
		this.MangGheDat.forEach(gheDaDat => {
			sum += gheDaDat.GiaVe;
		});
		this.TongTien = sum;
	}
	// Đặt vé
	datVe() {
		Swal.fire({
			title: 'Bạn có chắc là muốn đặt vé ?',
			text: `Rạp sẽ không hoàn trả lại tiền !!!`,
			type: 'warning',
			html:
				`Tổng tiền bạn phải trả là <b>${this.TongTien}</b> VND
      <p>Rạp sẽ không hoàn trả lại số tiền cho bạn</p>
      `,
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: 'Oke mua luôn!'
		}).then((result) => {
			if (result.value) {
				this.xuatVe();
				this._http.CapNhatChiTietPhongVe(this.DSGhe).subscribe(res => {
					console.log(res);
				},
					err => {
						console.log(err);
					}
				);
				Swal.fire(
					'Đã mua!',
					'Chúc bạn xem phim thật vui vẻ',
					'success'
				);
				setTimeout(() => {
					this._router.navigate([""]);
				}, 1000);
			}
		});
	}

	xuatVe() {
		this.VeDat = {
			TaiKhoanNguoiDung: this.user,
			MaPhim: this.MaPhim,
			DanhSachVe: this.DanhSachVeDat
		}
		console.log(this.VeDat);
		this._chitiet.DatVe(this.VeDat).subscribe(
			res => {
				console.log(res);
			},
			err => {
				console.log(err);
			}
		)
	}

	getUserName() {
		this._user.currentUser.subscribe(
			user => {
				this.user = user;
			},
			err => {
				console.log(err)
			}
		)
	}
}
