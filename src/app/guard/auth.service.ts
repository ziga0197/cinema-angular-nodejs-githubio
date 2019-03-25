import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // tslint:disable-next-line:no-inferrable-types
  isLogin: boolean = false;
  isAdminLogin: boolean;
  constructor() {
    this.isAdminLogin = false;
  }

  checkLogin() {
    if (localStorage.getItem('taikhoan')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }

   CheckAdminLogin() {
    if (localStorage.getItem('admin_login')) {
      this.isAdminLogin = true;
    } else {
      this.isAdminLogin = false;
    }
  }
}
