import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CAndFComponent } from './c-and-f.component';

describe('CAndFComponent', () => {
  let component: CAndFComponent;
  let fixture: ComponentFixture<CAndFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CAndFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CAndFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
