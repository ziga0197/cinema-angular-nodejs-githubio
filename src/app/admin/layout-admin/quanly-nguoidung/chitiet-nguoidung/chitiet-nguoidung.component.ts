import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { NguoiDung } from 'src/app/_core/model/NguoiDung';
import { StatusService } from 'src/app/services/status/status.service';
import { PhimService } from 'src/app/services/phim.service';
import { Phim } from 'src/app/_core/model/Phim';


@Component({
	selector: 'app-chitiet-nguoidung',
	templateUrl: './chitiet-nguoidung.component.html',
	styleUrls: ['./chitiet-nguoidung.component.scss']
})
export class ChitietNguoidungComponent implements OnInit {
	@Input() NguoiDung: any;
	giaoDich: any[];
	tenPhim: string;
	detailPhim: any[] = [];
	constructor(
		private _status: StatusService,
		private _chitiet: PhimService
	) {
	}

	ngOnInit() {
		this.NguoiDung = {
			TaiKhoan: '',
			MatKhau: '',
			HoTen: '',
			Email: '',
			SoDT: 0,
			MaLoaiNguoiDung: '',
			MaNhom: '',
			TenLoaiNguoiDung: '',
			_id: ''
		};
	}

	OpenModalEditUSer() {
		this._status.ChangeStatusEditUser(true);
	}

	getLichSuGiaoDich(taiKhoan) {
		this.detailPhim = [];
		this._chitiet.getLichSuGiaoDich(taiKhoan).subscribe(
			(res: any) => {
				if (res) {
					this.giaoDich = res;
					console.log(this.giaoDich);
				}
			},
			err => {
				console.log(err);
			},
			() => {
				this.getPhim();
			}
		);

	}
	getPhim() {
		for (let i = 0; i < this.giaoDich.length; i++) {
			const record = this.giaoDich[i];
			this.getChiTietPhim(record.MaPhim, record.DanhSachVe);
		};
		console.log(this.detailPhim);
	}

	getChiTietPhim(maPhim, danhSachVe) {
		this._chitiet.getChiTietPhim(maPhim).subscribe(
			(phim: any) => {
				this.detailPhim.push({
					TenPhim: phim.TenPhim,
					DanhSachVe: danhSachVe
				});
			},
			err => {
				console.log(err);
			}
		);
	}

}
