import {Component, OnInit} from '@angular/core';
import {SocialNetworkName} from "../social-networks/social-icon/social-icon.component";
import {ContactInfo, ContactInfoService} from "../../services/contact-info/contact-info.service";

export interface SocialName {
  contacts: SocialNetworkName[],
  modal: SocialNetworkName[]
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
  public contactInfo: ContactInfo
  public readonly mapConfig: MapConfig = {
    centerMap: [55.751952, 37.600739],
    zoom: 12,
    markGeometry: [55.751952, 37.600739]
  }

  constructor(private contactInfoService: ContactInfoService) {
    this.contactInfo = contactInfoService.contactInfo
  }

  ngOnInit(): void {
  }

}
