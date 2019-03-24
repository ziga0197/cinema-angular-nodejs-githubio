import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DsLichchieuComponent } from './ds-lichchieu.component';

describe('DsLichchieuComponent', () => {
  let component: DsLichchieuComponent;
  let fixture: ComponentFixture<DsLichchieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DsLichchieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DsLichchieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
