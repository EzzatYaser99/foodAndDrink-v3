import { Component, Input } from '@angular/core';
import { DockModule } from 'primeng/dock';
import { Tooltip } from 'primeng/tooltip';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'app-social-media-info',
  standalone: true,
  imports: [DockModule, Tooltip],
  templateUrl: './social-media-info.component.html',
  styleUrl: './social-media-info.component.scss',
})
export class SocialMediaInfoComponent {
  socialMediaInfo: SocialMediaInfo[] = [];

  @Input() lang: Language = Language.EN;

  constructor() {
    this.socialMediaInfo = [
      {
        id: 1,
        titleEN: 'Facebook',
        titleAR: 'فيسبوك',
        icon: 'fa-brands fa-facebook-f',
        class: 'facebook-bg',
        href: 'https://www.facebook.com/ezzatyaser99?mibextid=ZbWKwL',
      },
      {
        id: 2,
        titleEN: 'Whatsapp',
        titleAR: 'واتساب',
        icon: 'fa-brands fa-whatsapp',
        class: 'whatsapp-bg',
        href: 'https://wa.me/01554520650',
      },
      {
        id: 3,
        titleEN: 'instagram',
        titleAR: 'إنستغرام',
        icon: 'fa-brands fa-instagram',
        class: 'instagram-bg',
        href: 'https://www.instagram.com/ezzat_yasser99?igsh=NGNzZmFreGEwMnp4',
      },
    ];
  }
}
export class SocialMediaInfo {
  id!: number;
  icon!: string;
  class!: string;
  titleEN!: string;
  titleAR!: string;
  href!: string;
}
