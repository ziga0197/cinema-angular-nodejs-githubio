import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNguoidungComponent } from './form-nguoidung.component';

describe('FormNguoidungComponent', () => {
  let component: FormNguoidungComponent;
  let fixture: ComponentFixture<FormNguoidungComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNguoidungComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNguoidungComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
