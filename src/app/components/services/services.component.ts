import { Component } from '@angular/core';
import { siteContent } from '../../core/content';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  content = siteContent;
}
