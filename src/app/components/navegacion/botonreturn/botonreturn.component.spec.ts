import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotonreturnComponent } from './botonreturn.component';

describe('BotonreturnComponent', () => {
  let component: BotonreturnComponent;
  let fixture: ComponentFixture<BotonreturnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotonreturnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotonreturnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
