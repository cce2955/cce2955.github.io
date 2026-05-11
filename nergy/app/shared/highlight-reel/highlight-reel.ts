import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type HighlightItem = {
  title: string;
  description: string;
  icon: string;
  ctaLabel: string;
  ctaLink: string;
};

@Component({
  selector: 'app-highlight-reel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './highlight-reel.html',
  styleUrl: './highlight-reel.css',
})
export class HighlightReel {
  @Input() items: HighlightItem[] = [];
  @Input() heading = 'Why Nergy';
}
