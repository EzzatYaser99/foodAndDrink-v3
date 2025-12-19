import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LanguageService } from './core/service/language.service';
import { Language } from './core/enums/language.enum';
import { Navbar } from './core/components/navbar/navbar';
import { Spinner } from './core/components/spinner/spinner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, Navbar, Spinner],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('Gusto Restaurant');
  lang: string = Language.EN;
  isLoading: boolean = true;

  constructor(private readonly _languageService: LanguageService) {
    this.lang = localStorage.getItem('lang') ?? Language.EN;
    this._languageService.switchLanguage(this.lang);
  }
  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1500);
  }
}
