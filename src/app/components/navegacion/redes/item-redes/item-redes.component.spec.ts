import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemRedesComponent } from './item-redes.component';

describe('ItemRedesComponent', () => {
  let component: ItemRedesComponent;
  let fixture: ComponentFixture<ItemRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemRedesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
