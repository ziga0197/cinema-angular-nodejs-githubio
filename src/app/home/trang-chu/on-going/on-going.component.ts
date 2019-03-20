import { Component, OnInit } from '@angular/core';
import { Phim } from 'src/app/_core/model/Phim';
import { HttpClient } from '@angular/common/http';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss']
})
export class OnGoingComponent implements OnInit {

  onGoingPhims: Phim[];

  constructor(private _http: PhimService) { }

  ngOnInit() {
    // get Phim
    this._http.getPhim().subscribe(
      (res: Phim[]) => {
        this.onGoingPhims = res;
        console.log(this.onGoingPhims);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
