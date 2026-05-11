import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type HeroBannerCta = {
  label: string;
  link: string;
  primary?: boolean;
};

export type HeroBannerConfig = {
  eyebrow: string;
  headline: string;
  subtext: string;
  ctas: HeroBannerCta[];
};

@Component({
  selector: 'app-hero-banner',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero-banner.html',
  styleUrl: './hero-banner.css',
})
export class HeroBannerComponent {
  @Input({ required: true }) config!: HeroBannerConfig;
}
