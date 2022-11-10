import { Component, OnInit } from '@angular/core';

interface ContactInfo {
  mail: string,
  phone: string,
  address: string
}
interface MapConfig {
  centerMap: number[],
  zoom: number,
  markGeometry: number[]
}
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})

export class ContactsComponent implements OnInit {
  public readonly contactInfo: ContactInfo = {
    mail: 'hello@createx.com',
    phone: '(405) 555-0128',
    address: '2464 Royal Ln. Mesa, New Jersey 45463, USA'
  }

  public readonly mapConfig: MapConfig = {
    centerMap: [55.751952, 37.600739],
    zoom: 12,
    markGeometry: [55.751952, 37.600739]
  }

  ngOnInit() {
  }
}
