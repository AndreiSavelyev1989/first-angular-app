import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hiltop Hotel';
  numberOfRooms = 10;
  isHideRooms = false;
  constructor() {}

  ngOnInit(): void {}

  onHideRooms () {
    this.isHideRooms = !this.isHideRooms;
  }
}
