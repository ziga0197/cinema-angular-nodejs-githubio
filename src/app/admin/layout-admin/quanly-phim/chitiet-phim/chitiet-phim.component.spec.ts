import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitietPhimComponent } from './chitiet-phim.component';

describe('ChitietPhimComponent', () => {
  let component: ChitietPhimComponent;
  let fixture: ComponentFixture<ChitietPhimComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChitietPhimComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChitietPhimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
