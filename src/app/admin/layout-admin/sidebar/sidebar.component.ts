import { Component, OnInit, Input, HostListener } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() sidebar_status: boolean;
  constructor() { }

  ngOnInit() {
  }

}
