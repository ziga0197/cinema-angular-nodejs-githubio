import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanlyLichchieuComponent } from './quanly-lichchieu.component';

describe('QuanlyLichchieuComponent', () => {
  let component: QuanlyLichchieuComponent;
  let fixture: ComponentFixture<QuanlyLichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanlyLichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanlyLichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
