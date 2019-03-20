import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loai-phim',
  templateUrl: './loai-phim.component.html',
  styleUrls: ['./loai-phim.component.scss']
})
export class LoaiPhimComponent implements OnInit {

  status: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  changeState() {
    this.status = !this.status;
  }

}
