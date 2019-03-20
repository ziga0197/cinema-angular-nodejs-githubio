import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { PhimService } from 'src/app/services/phim.service';
import { Phim } from 'src/app/_core/model/Phim';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  constructor(private _http: PhimService) { }

  hinhAnhs  = [
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

    // slider carousel
    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   rewind: true,
    //   dots: false,
    //   autoplay: true,
    //   autoplayTimeout: 5000,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 1
    //     },
    //     1000: {
    //       items: 1
    //     }
    //   }
    // })
  }


}
