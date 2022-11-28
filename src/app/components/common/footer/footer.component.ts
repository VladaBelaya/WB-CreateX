import { Component, Input } from '@angular/core';
import { ContactInfo, ContactInfoService } from '../../../services/contact-info/contact-info.service';
import { SocialNetworkName } from '../social-networks/social-icon/social-icon.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  public contactInfo: ContactInfo;

  @Input() icons!: SocialNetworkName[];

  constructor(private contactInfoService: ContactInfoService) {
    this.contactInfo = contactInfoService.contactInfo;
  }
}
