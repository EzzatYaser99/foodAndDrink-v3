import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DockModule } from 'primeng/dock';
import { LanguageService } from '../../service/language.service';
import { Language } from '../../enums/language.enum';

@Component({
  selector: 'app-switch-lang-button',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, DockModule],
  templateUrl: './switch-lang-button.component.html',
  styleUrl: './switch-lang-button.component.scss',
})
export class SwitchLangButtonComponent {
  constructor(private readonly _languageService: LanguageService) {
    this.currentLang = localStorage.getItem('lang') ?? Language.EN;
  }

  currentLang: string = Language.EN;
  theme: 'dark' | 'light' = 'dark';

  get toggleText() {
    return this.currentLang === Language.EN ? Language.AR : Language.EN;
  }
  isLoading: boolean = false;

  toggleLang() {
    this.isLoading = true;
    this.currentLang = this.currentLang === Language.EN ? Language.AR : Language.EN;
    setTimeout(() => {
      this.isLoading = false;
      this._languageService.switchLanguage(this.currentLang);
    }, 1500);
  }
}
