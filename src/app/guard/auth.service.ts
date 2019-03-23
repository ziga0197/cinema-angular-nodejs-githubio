import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAdminLogin: boolean;
  constructor() {
    this.isAdminLogin = false;
  }

  CheckAdminLogin() {
    if (localStorage.getItem('admin_login')) {
      this.isAdminLogin = true;
    } else {
      this.isAdminLogin = false;
    }
  }
}
