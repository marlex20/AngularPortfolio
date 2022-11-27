import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormuredesComponent } from './formuredes.component';

describe('FormuredesComponent', () => {
  let component: FormuredesComponent;
  let fixture: ComponentFixture<FormuredesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormuredesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormuredesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
