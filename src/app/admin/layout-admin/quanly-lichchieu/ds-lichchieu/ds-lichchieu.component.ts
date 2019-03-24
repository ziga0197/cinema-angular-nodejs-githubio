import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhimAdmin } from 'src/app/_core/model/PhimAdmin';
import { PhimService } from 'src/app/services/phim.service';

@Component({
  selector: 'app-ds-lichchieu',
  templateUrl: './ds-lichchieu.component.html',
  styleUrls: ['./ds-lichchieu.component.scss']
})
export class DsLichchieuComponent implements OnInit {
  ChiTietPhim: PhimAdmin = new PhimAdmin();
  MaPhim = '';
  page = 1;
  itemsPerPage = 6;
  constructor(private _activeRouter: ActivatedRoute, private _phimService: PhimService) { }

  ngOnInit() {
    this._activeRouter.params.subscribe(
      (res: any) => {
        this.MaPhim = res.id;
        this._phimService.getChiTietPhim(this.MaPhim).subscribe(
          (phim: any) => {
            this.ChiTietPhim = phim;
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
