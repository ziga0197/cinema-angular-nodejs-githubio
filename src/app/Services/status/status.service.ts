import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  @Output() OutPutStatusUser = new EventEmitter();
  @Output() OutputStatusMovie = new EventEmitter();
  private StatusEditUser: boolean;
  private StatusEditMovie: boolean;
  constructor() {
    this.StatusEditUser = false;
    this.StatusEditMovie = false;
  }

  ChangeStatusEditUser(stt: boolean) {
    this.StatusEditUser = stt;
    this.OutPutStatusUser.emit(this.StatusEditUser);
  }

  ChangeStatusEditMovie(stt: boolean) {
    this.StatusEditMovie = stt;
    this.OutputStatusMovie.emit(this.StatusEditMovie);
  }
}
