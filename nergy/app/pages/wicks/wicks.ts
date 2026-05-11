import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { BannerComponent } from '../../shared/banner/banner';
import {
  HeroBannerComponent,
  HeroBannerConfig,
} from '../../shared/hero-banner/hero-banner';
import {
  FeaturedCarouselComponent,
  FeaturedCarouselSlide,
} from '../../shared/featured-carousel/featured-carousel';
import { SparkleLogo } from '../../shared/sparkle-logo/sparkle-logo';
import { HighlightReel } from '../../shared/highlight-reel/highlight-reel';

@Component({
  selector: 'app-wicks',
  standalone: true,
  imports: [
    CommonModule,
    BannerComponent,
    HeroBannerComponent,
    FeaturedCarouselComponent,
    SparkleLogo,
    HighlightReel,
  ],
  templateUrl: './wicks.html',
  styleUrl: './wicks.css',
})
export class WicksComponent {
  heroBanner: HeroBannerConfig = {
    eyebrow: 'Hand-poured wicks',
    headline: 'Set the mood, every time',
    subtext:
      'N\'ergy wicks are crafted to bring warmth, calm, and atmosphere into your space. Clean burns, rich scents, and a vibe that lingers.',
    ctas: [
      { label: 'Shop Collection', link: '/wicks', primary: true },
      { label: 'Explore Scents', link: '/sprays' },
    ],
  };

  slides: FeaturedCarouselSlide[] = [
    {
      label: 'New Arrivals',
      headline: 'The latest from Nergy',
      sub: 'Fresh drops across every category.',
      color: 'rgba(255, 110, 180, 0.18)',
      ctaLabel: 'Explore Collection',
      ctaLink: '/wicks',
    },
    {
      label: 'Wicks',
      headline: 'Premium burn essentials',
      sub: 'Cleaner performance and a better glow every time.',
      color: 'rgba(255, 202, 120, 0.22)',
      ctaLabel: 'Shop Wicks',
      ctaLink: '/wicks',
    },
    {
      label: 'Sprays',
      headline: 'Pair your burn with scent',
      sub: 'Layer room and body fragrance around your candle ritual.',
      color: 'rgba(160, 218, 255, 0.22)',
      ctaLabel: 'See Sprays',
      ctaLink: '/sprays',
    },
  ];

  highlights = [
    {
      icon: '',
      title: 'Clean burn',
      description: 'Premium wax blends for a smooth, even burn every time.',
      ctaLabel: 'Shop Wicks',
      ctaLink: '/wicks',
    },
    {
      icon: '',
      title: 'Signature scents',
      description: 'Layered fragrance profiles that actually last.',
      ctaLabel: 'Explore Scents',
      ctaLink: '/sprays',
    },
    {
      icon: '',
      title: 'Minimal design',
      description: 'Neutral, modern vessels that fit any space.',
      ctaLabel: 'See the Collection',
      ctaLink: '/wicks',
    },
  ];
}
