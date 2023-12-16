import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegeatonComponent } from './regeaton.component';

describe('RegeatonComponent', () => {
  let component: RegeatonComponent;
  let fixture: ComponentFixture<RegeatonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegeatonComponent]
    });
    fixture = TestBed.createComponent(RegeatonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
