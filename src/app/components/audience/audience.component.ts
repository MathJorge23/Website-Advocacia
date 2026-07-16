import { Component } from '@angular/core';
import { siteContent } from '../../core/content';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-audience',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './audience.component.html',
  styleUrl: './audience.component.scss',
})
export class AudienceComponent {
  content = siteContent;

  get whatsappHref(): string {
    const { whatsapp, whatsappMensagem } = this.content.contato;
    return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(whatsappMensagem)}`;
  }
}
