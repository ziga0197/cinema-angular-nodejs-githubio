import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';

@Component({
  selector: 'app-top-phim',
  templateUrl: './top-phim.component.html',
  styleUrls: ['./top-phim.component.scss']
})
export class TopPhimComponent implements OnInit, OnChanges {
  @Input() DS_Phim: PhimAdmin[];
  TopPhim: PhimAdmin[] = [];
  constructor() { }

  ngOnChanges() {
    this.TopPhim = this.DS_Phim.filter((el, index) => {
      if (index < 5) {
        return el;
      }
    });

    console.log(this.TopPhim);
  }

  ngOnInit() {
  }



}
