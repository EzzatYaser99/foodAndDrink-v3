import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../service/language.service';
import { TranslatePipe } from '@ngx-translate/core';
import { SocialMediaInfoComponent } from '../social-media-info/social-media-info.component';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'app-footer',
  imports: [TranslatePipe, SocialMediaInfoComponent],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer implements OnInit {
  lang: Language = Language.EN;
  openDays: WorkDays[] = [];
  contactDetailsInfo: ContactDetailsInfo[] = [];
  constructor(private readonly _languageService: LanguageService) {
    this._languageService.language.subscribe((language) => {
      this.lang = language;
    });
  }

  ngOnInit(): void {
    this.openDays = [
      {
        id: 1,
        openDaysEN: 'Sunday to Thursday',
        openDaysAR: 'من الأحد إلى الخميس',
      },
      {
        id: 2,
        openDaysEN: '9.00 Am - 6.00 Pm ',
        openDaysAR: '9:00 صباحًا إلى 6:00 مساءً',
      },
    ];

    this.contactDetailsInfo = [
      {
        id: 1,
        icon: 'pi pi-map-marker',
        titleEN: 'location ',
        titleAR: 'الموقع',
        href: '',
      },
      {
        id: 2,
        icon: 'pi pi-phone',
        titleEN: '+01554520650',
        titleAR: '01554520650+',
        href: 'https://wa.me/01554520650',
      },
    ];
  }
}

export class WorkDays {
  id!: number;
  openDaysEN!: string;
  openDaysAR!: string;
}

export class ContactDetailsInfo {
  id!: number;
  icon!: string;
  titleEN!: string;
  titleAR!: string;
  href!: string;
}
