import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuhabilidadesComponent } from './formuhabilidades.component';

describe('FormuhabilidadesComponent', () => {
  let component: FormuhabilidadesComponent;
  let fixture: ComponentFixture<FormuhabilidadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuhabilidadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuhabilidadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
