import { UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { DockModule } from 'primeng/dock';
import { LanguageService } from '../../service/language.service';
import { Language } from '../../enums/language.enum';
import { Spinner } from '../spinner/spinner';
import { Tooltip } from 'primeng/tooltip';

@Component({
  selector: 'app-switch-lang-button',
  standalone: true,
  imports: [TranslateModule, UpperCasePipe, DockModule, Spinner, Tooltip],
  templateUrl: './switch-lang-button.component.html',
  styleUrl: './switch-lang-button.component.scss',
})
export class SwitchLangButtonComponent {
  currentLang: string = Language.EN;

  constructor(private readonly _languageService: LanguageService) {
    this._languageService.language.subscribe((language) => {
      this.currentLang = language;
    });
  }

  get toggleText() {
    return this.currentLang === Language.EN ? 'ع ر' : Language.EN;
  }
  isLoading: boolean = false;

  toggleLang() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.currentLang = this.currentLang === Language.EN ? Language.AR : Language.EN;
      this._languageService.switchLanguage(this.currentLang);
    }, 1500);
  }
}
