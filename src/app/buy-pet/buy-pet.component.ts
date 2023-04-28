import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Database, set, ref } from '@angular/fire/database'

@Component({
  selector: 'app-buy-pet',
  templateUrl: './buy-pet.component.html',
  styleUrls: ['./buy-pet.component.css']
})
export class BuyPetComponent {
  @ViewChild('firstname') firstName?: ElementRef;
  @ViewChild('lastname') lastName?: ElementRef;
  @ViewChild('mail') mail?: ElementRef;
  @ViewChild('petType') petType?: ElementRef;
  @ViewChild('petSex') petSex?: ElementRef;
  @ViewChild('petAge') petAge?: ElementRef;
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
    if (this.petSex?.nativeElement.value.trim() === "")
    {
      alert("Pet sex cannot be empty.");
      return;
    }
    if (this.petAge?.nativeElement.value.trim() === "")
    {
      alert("Pet age cannot be empty.");
      return;
    }
    const min = 0;
    const max = 1000000000;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    set(ref(this.db, 'pet/' + this.firstName?.nativeElement.value.trim() + '/' + this.lastName?.nativeElement.value.trim() + '/' + randomNum),
    {
      mail: this.mail?.nativeElement.value.trim(),
      pettype: this.petType?.nativeElement.value.trim(),
      petsex: this.petSex?.nativeElement.value.trim(),
      petage: this.petAge?.nativeElement.value.trim()
    });
  }
}
