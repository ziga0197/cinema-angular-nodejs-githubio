import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrangChuAdminComponent } from './trang-chu-admin.component';

describe('TrangChuAdminComponent', () => {
  let component: TrangChuAdminComponent;
  let fixture: ComponentFixture<TrangChuAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrangChuAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrangChuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
