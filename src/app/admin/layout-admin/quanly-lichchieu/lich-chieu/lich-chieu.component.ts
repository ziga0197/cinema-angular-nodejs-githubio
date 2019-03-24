import { Component, OnInit, Input } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-lich-chieu]',
  templateUrl: './lich-chieu.component.html',
  styleUrls: ['./lich-chieu.component.scss']
})
export class LichChieuComponent implements OnInit {
  @Input() lich_chieu: any;
  @Input() index: number;
  constructor() { }

  ngOnInit() {
  }

}
