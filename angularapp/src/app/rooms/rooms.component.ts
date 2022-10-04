import { Component, OnInit } from '@angular/core';
import { Room, RoomList } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})
export class RoomsComponent implements OnInit {
  hotelName = 'Hiltop Hotel';
  numberOfRooms = 10;
  isHideRooms = false;
  rooms: Room = {
    totalRooms: 20,
    availableRooms: 15,
    bookedRooms: 5,
  };

  roomList: RoomList[] = [
    {
      roomNumber: 1,
      roomType: 'Deluxe Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen',
      price: 500,
      photos:
        'https://cdn.vox-cdn.com/thumbor/lf-wrVGFMBYKHZXfTQRaqMKQIwg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19732201/logan_apartments.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 2,
      roomType: 'Econom Room',
      amenities: 'Bathroom, Kitchen',
      price: 200,
      photos:
        'https://ramblas-suites.apartmentsinbarcelona.org/data/Photos/1060x610/10359/1035988/1035988048.JPEG',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
    {
      roomNumber: 3,
      roomType: 'President Room',
      amenities: 'Air Conditioner, Free Wi-Fi, Bathroom, Kitchen, Free Food',
      price: 1000,
      photos:
        'https://image.shutterstock.com/image-photo/luxury-open-plan-apartment-interior-260nw-436927078.jpg',
      checkinTime: new Date('11-Nov-2021'),
      checkoutTime: new Date('12-Nov-2021'),
    },
  ];
  constructor() {}

  ngOnInit(): void {}

  onHideRooms() {
    this.isHideRooms = !this.isHideRooms;
  }
}
