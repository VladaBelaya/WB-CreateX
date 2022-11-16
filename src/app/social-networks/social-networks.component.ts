import {Component, Input} from '@angular/core';
import {SocialNetworkName} from "./social-icon/social-icon.component";
import {IconService} from "../services/icon/icon.service";

interface NameIcons {
  name: string;
  path: string
}

const ICONS: NameIcons[] = [
  {
    name: 'facebook',
    path: '/assets/img/facebook.svg',
  },
  {
    name: 'twitter',
    path: '/assets/img/twitter.svg',
  },
  {
    name: 'youtube',
    path: '/assets/img/youtube.svg',
  },
  {
    name: 'telegram',
    path: '/assets/img/telegram.svg',
  },
  {
    name: 'instagram',
    path: '/assets/img/instagram.svg',
  },
  {
    name: 'linkedin',
    path: '/assets/img/linkedin.svg',
  },
  {
    name: 'google',
    path: '/assets/img/google_min.svg',
  },
];

type CollectionIcons = {
  default: SocialNetworkName[],
  modal: SocialNetworkName[],
  blog: SocialNetworkName[]
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
    blog: ['Facebook', 'Twitter', 'Linkedin']
  }
  @Input() name: string = 'default'
  @Input() isFooter?: boolean = false
  @Input() isCenter?: boolean = false
  @Input() isBlog?: boolean = false

  color = 'red'

  constructor(private readonly iconService: IconService) {
    this.initIcons()
  }

  get icons(): SocialNetworkName[] {
    // @ts-ignore
    return this.collectionIcon[this.name]
  }

  private initIcons(): void {
    for (const icon of ICONS) {
      this.iconService.addPath(icon.name, icon.path);
    }
  }
}
