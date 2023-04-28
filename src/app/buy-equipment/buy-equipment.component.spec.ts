import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyEquipmentComponent } from './buy-equipment.component';

describe('BuyEquipmentComponent', () => {
  let component: BuyEquipmentComponent;
  let fixture: ComponentFixture<BuyEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyEquipmentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
