import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhimLcComponent } from './phim-lc.component';

describe('PhimLcComponent', () => {
  let component: PhimLcComponent;
  let fixture: ComponentFixture<PhimLcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhimLcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhimLcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
