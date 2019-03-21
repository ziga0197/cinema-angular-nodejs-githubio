import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PhimService } from 'src/app/services/phim.service';
import { Phim } from 'src/app/_core/model/Phim';
import { Observable } from 'rxjs';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private _http: PhimService) { }

  @ViewChild('owl') refOwl: OwlCarousel;


  hinhAnhs = [
    'https://s3img.vcdn.vn/123phim/2019/03/chung-nhan-hoan-hao-15514152824910.jpg',
    'https://s3img.vcdn.vn/123phim/2019/03/dai-uy-marvel-15514145585840.jpg'
  ];

  ngOnInit() {
    // this._http.getPhim().subscribe(
    //   (res: Phim[]) => {
    //     res.forEach(phim => {
    //       this.hinhAnhs.push(phim.HinhAnh);
    //     });
    //   }
    // )

  }


}
