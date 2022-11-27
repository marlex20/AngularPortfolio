import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuformacionComponent } from './formuformacion.component';

describe('FormuformacionComponent', () => {
  let component: FormuformacionComponent;
  let fixture: ComponentFixture<FormuformacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuformacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuformacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
