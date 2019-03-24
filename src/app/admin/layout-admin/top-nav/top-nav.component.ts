import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { NguoiDung } from 'src/app/Models/NguoiDung';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {
  @Output() toggle_Sidebar = new EventEmitter();
  toggle_OptionNav = false;
  admin: NguoiDung;
  constructor(private _router: Router) { }

  ngOnInit() {
    this.admin = JSON.parse(localStorage.getItem('admin_login'));
  }

  ThongTinAdmin() {
    this._router.navigate(['admin/thongtin-admin']);
  }

  DangXuat() {
    swal({
      title: 'Bạn muốn đăng xuất ?',
      icon: 'warning',
      dangerMode: true,
      buttons: ['Hủy', 'Đăng xuất'],
    }).then((logOut) => {
      if (logOut) {
        localStorage.removeItem('admin_login');
        this._router.navigate(['/admin/login']);
      }
    });

  }

  Handle_Sidebar() {
    this.toggle_Sidebar.emit(false);
  }

  Handle_OptionNav() {
    this.toggle_OptionNav = !this.toggle_OptionNav;
  }
}
