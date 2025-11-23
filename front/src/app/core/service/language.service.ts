import { Inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DOCUMENT } from '@angular/common';
import { BehaviorSubject } from 'rxjs';
import { Language } from '../enums/language.enum';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly supportedLanguages: [string, string] = [Language.EN, Language.AR];
  language = new BehaviorSubject<Language>(Language.EN);
  currentLang: string = this.supportedLanguages[0];

  constructor(
    private readonly _translate: TranslateService,
    @Inject(DOCUMENT) private readonly _document: Document,
  ) {
    const lang = localStorage.getItem('lang') ?? this.currentLang;
    this.language.next(<Language>lang);
    this._translate.addLangs(this.supportedLanguages);
    this._translate.setDefaultLang(Language.EN);
  }
  switchLanguage(lang: string): void {
    this.language.next(<Language>lang);
    if (!this.supportedLanguages.includes(lang)) return;

    this._translate.use(lang);
    localStorage.setItem('lang', lang);
    this.updateDirection(lang);
  }

  private updateDirection(lang: string): void {
    const isRTL = lang === Language.AR;
    this._document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    this._document.documentElement.lang = lang;
  }
}
