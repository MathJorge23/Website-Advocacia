import { Component, HostListener, signal } from '@angular/core';
import { siteContent } from '../../core/content';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  content = siteContent;
  menuOpen = signal(false);
  scrolled = signal(false);

  get whatsappHref(): string {
    const { whatsapp, whatsappMensagem } = this.content.contato;
    return `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodeURIComponent(whatsappMensagem)}`;
  }

  toggleMenu(): void {
    this.menuOpen.update((v) => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled.set(window.scrollY > 12);
  }
}
