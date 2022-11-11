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
interface SocialNetworks {
  link: string,
  name: string
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

  public socialNetworks: SocialNetworks[] = [
    {
      link: 'https://ru-ru.facebook.com',
      name: 'facebook'
    },
    {
      link: 'https://twitter.com',
      name: 'twitter'
    },
    {
      link: 'https://www.youtube.com',
      name: 'youtube'
    },
    {
      link: 'https://web-telegram.ru',
      name: 'telegram'
    },
    {
      link: 'https://www.instagram.com',
      name: 'instagram'
    },
    {
      link: 'https://ru.linkedin.com',
      name: 'linkedin'
    },
  ]

  ngOnInit() {
  }
}
