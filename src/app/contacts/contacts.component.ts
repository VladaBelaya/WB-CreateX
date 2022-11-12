import { Component, OnInit } from '@angular/core';
import {SocialNetworkName} from "../social-networks/social-icon/social-icon.component";

type ContactMap = {
  href: string;
  value: string;
}

export interface SocialName {
  contacts: SocialNetworkName[],
  modal: SocialNetworkName[]
}

interface ContactInfo {
  mail: ContactMap,
  phone: ContactMap,
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
    mail: {
      href: 'mailto:hello@createx.com',
      value: 'hello@createx.com'
    },
    phone: {
      href: 'tel:+74055550128',
      value: '(405) 555-0128'
    },
    address: '2464 Royal Ln. Mesa, New Jersey 45463, USA'
  }

  public readonly mapConfig: MapConfig = {
    centerMap: [55.751952, 37.600739],
    zoom: 12,
    markGeometry: [55.751952, 37.600739]
  }
  public readonly icons: SocialName = {
    contacts: ['Facebook', 'Twitter', 'Youtube', 'Telegram', 'Instagram', 'Linkedin'],
    modal: ['Facebook', 'Google', 'Twitter', 'Linkedin']
  }

  ngOnInit() {
  }
}
