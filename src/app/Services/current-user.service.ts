import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor() { }

  private userName = new BehaviorSubject(localStorage.getItem('taikhoan'));
  currentUser = this.userName.asObservable();

  changeUserName(userName) {
    this.userName.next(userName);
  }
}
