import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  @Output() OutPutStatusUser = new EventEmitter();
  @Output() OutputStatusMovie = new EventEmitter();
  @Output() OutputStatusAdmin = new EventEmitter();
  private StatusEditUser: boolean;
  private StatusEditMovie: boolean;
  private StatusEditAdmin: string;
  constructor() {
    this.StatusEditUser = false;
    this.StatusEditMovie = false;
    this.StatusEditAdmin = 'normal';
  }

  ChangeStatusEditUser(stt: boolean) {
    this.StatusEditUser = stt;
    this.OutPutStatusUser.emit(this.StatusEditUser);
  }

  ChangeStatusEditMovie(stt: boolean) {
    this.StatusEditMovie = stt;
    this.OutputStatusMovie.emit(this.StatusEditMovie);
  }

  ChangeStatusEditAdmin(stt: string) {
    // normal: trạng thái bình thường , edit: mở form chỉnh sửa, update : cập nhật damin
    this.StatusEditAdmin = stt;
    this.OutputStatusAdmin.emit(this.StatusEditAdmin);
  }
}
