import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { CurrentUserService } from 'src/app/services/current-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private _route: Router, private _userName: CurrentUserService) { }
  userName: string;

  ngOnInit() {
    this.userName = localStorage.getItem('taikhoan');
    // nhận tên username
    this._userName.currentUser.subscribe(
      (userName) => {
        this.userName = userName;
      }
    )
  }

  logIn() {
    this._route.navigate(['/dang-nhap']);
  }
  logOut() {
    localStorage.removeItem('taikhoan');
    this._route.navigate(['']);
    this.userName = null;
  }
  getUserName() {

  }
}
