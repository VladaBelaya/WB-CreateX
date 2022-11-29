import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

interface NameIcons {
  name: string;
  path: string;
}

const ICONS: NameIcons[] = [
  {
    name: 'facebook',
    path: 'assets/img/facebook.svg',
  },
  {
    name: 'twitter',
    path: 'assets/img/twitter.svg',
  },
  {
    name: 'youtube',
    path: 'assets/img/youtube.svg',
  },
  {
    name: 'telegram',
    path: 'assets/img/telegram.svg',
  },
  {
    name: 'instagram',
    path: 'assets/img/instagram.svg',
  },
  {
    name: 'linkedin',
    path: 'assets/img/linkedin.svg',
  },
  {
    name: 'google',
    path: 'assets/img/google_min.svg',
  },{
    name: 'article',
    path: 'assets/img/article_gray.svg',
  },{
    name: 'video',
    path: 'assets/img/video_gray.svg',
  },{
    name: 'podcast',
    path: 'assets/img/podcast_gray.svg',
  },
];

@Injectable({
  providedIn: 'root',
})
export class IconService {
  constructor(
    private readonly iconRegistry: MatIconRegistry,
    private readonly sanitizer: DomSanitizer
  ) {
    this.initIcons();
  }

  addPath(name: string, path: string) {
    this.iconRegistry.addSvgIcon(
      name,
      this.sanitizer.bypassSecurityTrustResourceUrl(path)
    );
  }

  private initIcons() {
    for (const icon of ICONS) {
      this.addPath(icon.name, icon.path);
    }
  }
}
