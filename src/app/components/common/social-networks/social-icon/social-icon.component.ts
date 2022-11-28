import { Component, Input } from '@angular/core';

enum NetworksLinks {
  Facebook = 'https://ru-ru.facebook.com',
  Twitter = 'https://twitter.com',
  Instagram = 'https://www.instagram.com',
  Linkedin = 'https://ru.linkedin.com',
  Youtube = 'https://www.youtube.com',
  Telegram = 'https://web-telegram.ru',
  Google = 'https://www.google.com',
}

export type SocialNetworkName = keyof typeof NetworksLinks;

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent {
  @Input() name!: SocialNetworkName;
  @Input() isCenter?: boolean = false;

  public getLink(name: SocialNetworkName): string {
    return NetworksLinks[name];
  }
}
