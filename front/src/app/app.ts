import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchLangButtonComponent } from './core/components/switch-lang-button/switch-lang-button.component';
import { LanguageService } from './core/service/language.service';
import { Language } from './core/enums/language.enum';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TranslatePipe, SwitchLangButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('front');
  lang: string = Language.EN;
  constructor(private readonly _languageService: LanguageService) {
    this.lang = localStorage.getItem('lang') ?? Language.EN;
    this._languageService.switchLanguage(this.lang);
  }
}
