import { Component, OnInit, Input } from '@angular/core';
import { Phim } from 'src/app/Models/Phim';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-phim-lc]',
  templateUrl: './phim-lc.component.html',
  styleUrls: ['./phim-lc.component.scss']
})
export class PhimLcComponent implements OnInit {
  @Input() phim: Phim;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
