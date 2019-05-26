import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Ghe } from 'src/app/_core/model/ghe';

@Component({
  selector: 'app-dat-ve',
  templateUrl: './dat-ve.component.html',
  styleUrls: ['./dat-ve.component.scss']
})
export class DatVeComponent implements OnInit {

  @Input() inputGhe: Ghe;
  @Output() outputGhe = new EventEmitter();

  GheDaDat: Ghe;
  constructor() {

  }

  ngOnInit() {
    this.GheDaDat = { ...this.inputGhe };
  }

  // đổi màu ghế đặt
  datGhe(gheDat) {
    this.inputGhe.DaDat = !gheDat;
    // gửi output
    this.outputGhe.emit(this.inputGhe);
  }

}
