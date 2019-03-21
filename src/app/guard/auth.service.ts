import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  isLogin: boolean = false;
  checkLogin() {
    if (localStorage.getItem('taikhoan')) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  }
}
