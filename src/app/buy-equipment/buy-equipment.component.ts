import { Component, Output, EventEmitter, ViewChild, ElementRef  } from '@angular/core';
import { Database, ref, set } from '@angular/fire/database'


@Component({
  selector: 'app-buy-equipment',
  templateUrl: './buy-equipment.component.html',
  styleUrls: ['./buy-equipment.component.css']
})
export class BuyEquipmentComponent {
  @ViewChild('firstname') firstName?: ElementRef;
  @ViewChild('lastname') lastName?: ElementRef;
  @ViewChild('mail') mail?: ElementRef;
  @ViewChild('petType') petType?: ElementRef;
  @ViewChild('productType') productType?: ElementRef;
  @ViewChild('quantity') quantity?: ElementRef;
  @Output() returnMainPage = new EventEmitter<void>();

  onReturnMainPage() {
    this.returnMainPage.emit();
  }

  constructor(public db: Database) {
  }

  onOrder() {
    if (this.firstName?.nativeElement.value.trim() === "")
    {
      alert("First Name cannot be empty.");
      return;
    }
    if (this.lastName?.nativeElement.value.trim() === "")
    {
      alert("Last Name cannot be empty.");
      return;
    }
    if (this.mail?.nativeElement.value.trim() === "")
    {
      alert("Mail cannot be empty.");
      return;
    }
    if (this.petType?.nativeElement.value.trim() === "")
    {
      alert("Pet type cannot be empty.");
      return;
    }
    if (this.productType?.nativeElement.value.trim() === "")
    {
      alert("Product Type cannot be empty.");
      return;
    }
    if (this.quantity?.nativeElement.value.trim() === "")
    {
      alert("Quantity cannot be empty.");
      return;
    }
    const min = 0;
    const max = 1000000000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    set(ref(this.db, 'equipment/' + this.firstName?.nativeElement.value.trim() + '/' + this.lastName?.nativeElement.value.trim() + '/' + randomNum),
    {
      mail: this.mail?.nativeElement.value.trim(),
      pettype: this.petType?.nativeElement.value.trim(),
      productType: this.productType?.nativeElement.value.trim(),
      quantity: this.quantity?.nativeElement.value.trim()
    });
  }
}
