import { Component } from '@angular/core';
import { siteContent } from '../../core/content';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {
  content = siteContent;

  get whatsappHref(): string {
    const { whatsapp, whatsappMensagem } = this.content.contato;
    return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(whatsappMensagem)}`;
  }
}
