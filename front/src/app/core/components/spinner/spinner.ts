import { Component, Input } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-spinner',
  imports: [TranslatePipe],
  templateUrl: './spinner.html',
  styleUrl: './spinner.scss',
  standalone: true,
})
export class Spinner {
  @Input() showWelcomeMessage: boolean = false;
}
