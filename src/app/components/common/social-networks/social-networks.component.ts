import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "./social-icon/social-icon.component";

type CollectionIcons = {
  default: SocialNetworkName[],
  modal: SocialNetworkName[],
  blog: SocialNetworkName[],
  author: SocialNetworkName[],
}

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent {
  public collectionIcon: CollectionIcons = {
    default: ['Facebook', 'Twitter', 'Youtube', 'Telegram', 'Instagram', 'Linkedin'],
    modal: ['Facebook', 'Google', 'Twitter', 'Linkedin'],
    blog: ['Facebook', 'Twitter', 'Linkedin'],
    author: ['Instagram', 'Twitter', 'Linkedin'],
  }
  @Input() name: string = 'default'
  @Input() isFooter?: boolean = false
  @Input() isCenter?: boolean = false
  @Input() isBlog?: boolean = false

  color = 'red'

  constructor() {
  }

  get icons(): SocialNetworkName[] {
    // @ts-ignore
    return this.collectionIcon[this.name]
  }

}
