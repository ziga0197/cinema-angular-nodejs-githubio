import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/_core/model/Phim';
import { Router } from '@angular/router';

@Component({
  selector: 'app-phim',
  templateUrl: './phim.component.html',
  styleUrls: ['./phim.component.scss']
})
export class PhimComponent implements OnInit {

  @Input() ipPhim: Phim;
  constructor(private _route: Router) { }

  ngOnInit() {
  }

  getChiTiet(MaPhim) {
    this._route.navigate(['/chi-tiet-phim', MaPhim])
  }
}
