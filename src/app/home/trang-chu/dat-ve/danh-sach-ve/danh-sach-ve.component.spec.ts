import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhSachVeComponent } from './danh-sach-ve.component';

describe('DanhSachVeComponent', () => {
  let component: DanhSachVeComponent;
  let fixture: ComponentFixture<DanhSachVeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DanhSachVeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhSachVeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
