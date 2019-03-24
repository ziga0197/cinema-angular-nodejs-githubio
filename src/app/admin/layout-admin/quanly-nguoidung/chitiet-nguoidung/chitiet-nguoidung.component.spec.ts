import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietNguoidungComponent } from './chitiet-nguoidung.component';

describe('ChitietNguoidungComponent', () => {
  let component: ChitietNguoidungComponent;
  let fixture: ComponentFixture<ChitietNguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietNguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
