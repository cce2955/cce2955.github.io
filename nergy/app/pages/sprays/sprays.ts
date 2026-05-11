import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/banner/banner';
import { SparkleLogo } from '../../shared/sparkle-logo/sparkle-logo';
import { HeroBannerComponent, HeroBannerConfig } from '../../shared/hero-banner/hero-banner';
import { FeaturedCarouselComponent, FeaturedCarouselSlide } from '../../shared/featured-carousel/featured-carousel';
import { HighlightReel, HighlightItem } from '../../shared/highlight-reel/highlight-reel';

@Component({
  selector: 'app-sprays',
  standalone: true,
  imports: [BannerComponent, SparkleLogo, HeroBannerComponent, FeaturedCarouselComponent, HighlightReel],
  templateUrl: './sprays.html',
  styleUrl: './sprays.css',
})
export class Sprays {
  heroBanner: HeroBannerConfig = {
    eyebrow: 'Room & Body Sprays',
    headline: 'Scent the air around you',
    subtext: 'N\'ergy sprays are made for instant atmosphere — light, modern fragrance for your space and skin.',
    ctas: [
      { label: 'Shop Sprays', link: '/sprays', primary: true },
      { label: 'Explore Scents', link: '#highlights', primary: false },
    ],
  };

  slides: FeaturedCarouselSlide[] = [
    {
      label: 'New Arrivals',
      headline: 'Fresh sprays just dropped',
      sub: 'New scent profiles for every room and routine.',
      color: 'rgba(160, 218, 255, 0.22)',
      ctaLabel: 'Shop Now',
      ctaLink: '/sprays',
    },
    {
      label: 'Room Sprays',
      headline: 'Shift the atmosphere instantly',
      sub: 'Fast-acting fragrance for bedrooms, entryways, and living spaces.',
      color: 'rgba(182, 255, 216, 0.22)',
      ctaLabel: 'See Room Sprays',
      ctaLink: '/sprays',
    },
    {
      label: 'Body Sprays',
      headline: 'Wear it lightly',
      sub: 'Wearable fragrance made for layering throughout the day.',
      color: 'rgba(255, 169, 196, 0.22)',
      ctaLabel: 'See Body Sprays',
      ctaLink: '/sprays',
    },
  ];

  highlights: HighlightItem[] = [
    {
      icon: '',
      title: 'Light & wearable',
      description: 'Designed for daily use without being overpowering.',
      ctaLabel: 'Shop Sprays',
      ctaLink: '/sprays',
    },
    {
      icon: '',
      title: 'Room-ready',
      description: 'Fast atmosphere shifts for any space in your home.',
      ctaLabel: 'See Room Sprays',
      ctaLink: '/sprays',
    },
    {
      icon: '',
      title: 'Layer friendly',
      description: 'Scent profiles built to work alongside wicks and body products.',
      ctaLabel: 'Explore Pairings',
      ctaLink: '/wicks',
    },
  ];
}
