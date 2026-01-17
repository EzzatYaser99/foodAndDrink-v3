import { Component, effect, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from './core/service/language.service';
import { Language } from './core/enums/language.enum';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Gusto Restaurant');
  lang: string = Language.EN;

  constructor(
    private readonly _languageService: LanguageService,
    private titleService: Title,
  ) {
    this.lang = localStorage.getItem('lang') ?? Language.EN;
    this._languageService.switchLanguage(this.lang);
    effect(() => {
      setTimeout(() => {
        this.titleService.setTitle(this.title());
      }, 1500);
    });
  }
}
