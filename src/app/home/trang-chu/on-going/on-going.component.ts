import { Component, OnInit } from '@angular/core';
import { Phim } from 'src/app/_core/model/Phim';
import { HttpClient } from '@angular/common/http';
import { PhimService } from 'src/app/services/phim.service';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
  stagger,
  keyframes,
  // ...
} from '@angular/animations';
@Component({
  selector: 'app-on-going',
  templateUrl: './on-going.component.html',
  styleUrls: ['./on-going.component.scss'],
  animations: [
    trigger('phimAnimate', [
      transition('*=>*', [
        query(':enter', style({
          opacity: 0,
        }), {
            optional: true
          }),

        query(':enter', stagger('100ms', [
          animate('1s ease-in', keyframes([
            style({ opacity: 0, transform: 'translateX(-35px)', offset: 0 }),
            style({ opacity: 0.5, transform: 'translateX(35px)', offset: 0.5 }),
            style({ opacity: 1, transform: 'translateX(0)', offset: 1 })
          ]))
        ]))
      ])
    ])
  ]
})
export class OnGoingComponent implements OnInit {

  onGoingPhims: Phim[];

  constructor(private _http: PhimService) { }

  ngOnInit() {
    // get Phim
    this._http.getPhim().subscribe(
      (res: Phim[]) => {
        console.log(res)
        this.onGoingPhims = res;
        console.log(this.onGoingPhims);
      },
      (err) => {
        console.log(err);
      }
    )
  }

}
