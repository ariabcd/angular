import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyPetComponent } from './buy-pet.component';

describe('BuyPetComponent', () => {
  let component: BuyPetComponent;
  let fixture: ComponentFixture<BuyPetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuyPetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuyPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
