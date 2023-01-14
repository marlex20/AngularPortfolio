import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormubannerComponent } from './formubanner.component';

describe('FormubannerComponent', () => {
  let component: FormubannerComponent;
  let fixture: ComponentFixture<FormubannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormubannerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormubannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
