import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaboralComponent } from './formulaboral.component';

describe('FormulaboralComponent', () => {
  let component: FormulaboralComponent;
  let fixture: ComponentFixture<FormulaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormulaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
