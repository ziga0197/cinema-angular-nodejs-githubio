import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-thong-ke',
  templateUrl: './thong-ke.component.html',
  styleUrls: ['./thong-ke.component.scss']
})
export class ThongKeComponent implements OnInit {
  @Input() countNguoiDung: number;
  @Input() countPhim: number;
  @Input() countVe: number;
  constructor() { }

  ngOnInit() {
  }

}
