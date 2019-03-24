import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPhimComponent } from './form-phim.component';

describe('FormPhimComponent', () => {
  let component: FormPhimComponent;
  let fixture: ComponentFixture<FormPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
