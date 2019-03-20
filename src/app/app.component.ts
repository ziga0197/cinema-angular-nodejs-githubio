import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, Event, NavigationError } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'movie-page';

  constructor(private loadingBar: LoadingBarService) {
  }

  startLoading() {
    this.loadingBar.start();
  }

  stopLoading() {
    this.loadingBar.complete();
  }
}
