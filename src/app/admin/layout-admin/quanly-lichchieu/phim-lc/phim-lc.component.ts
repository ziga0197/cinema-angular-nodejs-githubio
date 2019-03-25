import { Component, OnInit, Input } from '@angular/core';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-phim-lc]',
  templateUrl: './phim-lc.component.html',
  styleUrls: ['./phim-lc.component.scss']
})
export class PhimLcComponent implements OnInit {
  @Input() phim: PhimAdmin;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
