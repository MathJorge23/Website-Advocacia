import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { siteContent } from '../../core/content';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  content = siteContent;

  constructor(private sanitizer: DomSanitizer) {}

  get whatsappHref(): string {
    const { whatsapp, whatsappMensagem } = this.content.contato;
    return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(whatsappMensagem)}`;
  }

  get mapUrl(): SafeResourceUrl {
    const endereco = encodeURIComponent(this.content.contato.endereco);
    return this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.google.com/maps?q=${endereco}&output=embed`
    );
  }
}
