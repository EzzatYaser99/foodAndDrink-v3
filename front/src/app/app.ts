import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TranslatePipe } from '@ngx-translate/core';
import { SwitchLangButtonComponent } from './core/components/switch-lang-button/switch-lang-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, TranslatePipe, SwitchLangButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('front');
}
