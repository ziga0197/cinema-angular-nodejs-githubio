import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyPhimComponent } from './quanly-phim.component';

describe('QuanlyPhimComponent', () => {
  let component: QuanlyPhimComponent;
  let fixture: ComponentFixture<QuanlyPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
