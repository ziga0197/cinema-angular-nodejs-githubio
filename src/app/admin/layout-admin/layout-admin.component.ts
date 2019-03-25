import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-layout-admin',
  templateUrl: './layout-admin.component.html',
  styleUrls: ['./layout-admin.component.scss']
})
export class LayoutAdminComponent implements OnInit {
  sidebar_status: boolean;
  window_width: number = window.innerHeight;
  constructor() {}

  ngOnInit() {
     // xét window size lúc mới khởi tạo
    this.Handle_Sidebar(window.innerWidth);
  }

  // xét window size lúc resize màn hình
  @HostListener('window:resize') WindowResize() {
    this.Handle_Sidebar(window.innerWidth);
  }

  // Hàm ẩn hiện sidebar
  Handle_Sidebar(value: any) {
    // nếu nhận vào tham số là boolean (nút toggle)
    if (typeof value === 'boolean') {
      if (this.sidebar_status === true) {
        this.sidebar_status = value;
      } else {
        this.sidebar_status = !value;
      }
    } else if (typeof value === 'number') {  // nếu tham số là number (thêm window size)
      if (value <= 768) {
        this.sidebar_status = false;
      } else {
        this.sidebar_status = true;
      }
    }
  }

}
