import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Phim } from 'src/app/Models/Phim';
import { PhimService } from 'src/app/Services/phim/phim.service';

@Component({
  selector: 'app-ds-lichchieu',
  templateUrl: './ds-lichchieu.component.html',
  styleUrls: ['./ds-lichchieu.component.scss']
})
export class DsLichchieuComponent implements OnInit {
  ChiTietPhim: Phim = new Phim();
  MaPhim = '';
  page = 1;
  itemsPerPage = 6;
  constructor(private _activeRouter: ActivatedRoute, private _phimService: PhimService) { }

  ngOnInit() {
    this._activeRouter.params.subscribe(
      (res: any) => {
        this.MaPhim = res.id;
        this._phimService.LayChiTietPhim(this.MaPhim).subscribe(
          (phim: any) => {
            this.ChiTietPhim = phim;
            console.log(this.ChiTietPhim);
          }
        );
      },
      err => console.log(err)
    );
  }

  GetAbsoluteIndex(indexOnPage: number, currentPage: number) {
    return this.itemsPerPage * (currentPage - 1) + indexOnPage;
  }

}
