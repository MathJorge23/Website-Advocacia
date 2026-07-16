import { Component } from '@angular/core';
import { siteContent } from '../../core/content';

@Component({
  selector: 'app-footer',
  standalone: true,
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  content = siteContent;
  year = new Date().getFullYear();
}
