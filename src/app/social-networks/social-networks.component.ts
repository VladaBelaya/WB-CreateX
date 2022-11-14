import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "./social-icon/social-icon.component";

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  @Input() nameSocialNetworks: SocialNetworkName[] = []
  @Input() isFooter?: boolean = false
  @Input() isCenter?: boolean = false
}
