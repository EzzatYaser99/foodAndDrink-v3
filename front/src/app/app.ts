import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { SwitchLangButtonComponent } from './core/components/switch-lang-button/switch-lang-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TranslatePipe, SwitchLangButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('front');

  constructor(private translate: TranslateService) {
    this.translate.use('en');
  }
}
