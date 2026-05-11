import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/banner/banner';
import {
  FeaturedCarouselComponent,
  FeaturedCarouselSlide,
} from '../../shared/featured-carousel/featured-carousel';
import {
  HighlightItem,
  HighlightReel,
} from '../../shared/highlight-reel/highlight-reel';
import { HeroBannerComponent } from '../../shared/hero-banner/hero-banner';
import { SparkleLogo } from '../../shared/sparkle-logo/sparkle-logo';

type PanelKey = 'wicks' | 'sprays' | 'body';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    BannerComponent,
    SparkleLogo,
    HighlightReel,
    FeaturedCarouselComponent,
    HeroBannerComponent,
  ],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class LandingComponent implements OnInit, OnDestroy {
  activePanel: PanelKey | null = null;

  heroBanner = {
    eyebrow: 'Fragrance Collection',
    headline: 'Glow for every layer of your space and routine.',
    subtext:
      "N'ergy brings together fragrance and atmosphere across candles, soaps, body sprays, and room sprays. Explore the full collection from one polished home base, then dive into each category.",
    ctas: [
      {
        label: 'Shop Wicks',
        link: '/wicks',
        primary: true,
      },
      {
        label: 'View Collections',
        link: '#collections',
        primary: false,
      },
    ],
  };

  slides: FeaturedCarouselSlide[] = [
    {
      label: 'New Arrivals',
      headline: "The latest from N'ergy",
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
      headline: 'Room and body fragrance',
      sub: 'Soft, modern scent layers for spaces and skin.',
      color: 'rgba(160, 218, 255, 0.22)',
      ctaLabel: 'See Sprays',
      ctaLink: '/sprays',
    },
  ];

  highlights: HighlightItem[] = [
    {
      title: 'Wicks',
      description:
        'Clean burns, rich scent throw, and the signature Nergy mood.',
      icon: '',
      ctaLabel: 'Shop Wicks',
      ctaLink: '/wicks',
    },
    {
      title: 'Sprays',
      description:
        'Light, wearable fragrance made for layering throughout the day.',
      icon: '',
      ctaLabel: 'Shop Sprays',
      ctaLink: '/sprays',
    },
    {
      title: 'Body',
      description:
        'Daily-use essentials with a softer, elevated fragrance profile.',
      icon: '',
      ctaLabel: 'Shop Body',
      ctaLink: '/body',
    },
  ];

  activeIndex = 0;
  isTransitioning = false;
  private autoInterval: ReturnType<typeof setInterval> | null = null;

  constructor(private readonly router: Router) {}

  ngOnInit(): void {
    this.autoInterval = setInterval(() => this.next(), 4000);
  }

  ngOnDestroy(): void {
    if (this.autoInterval) {
      clearInterval(this.autoInterval);
    }
  }

  next(): void {
    this.transition(() => {
      this.activeIndex = (this.activeIndex + 1) % this.slides.length;
    });
  }

  prev(): void {
    this.transition(() => {
      this.activeIndex =
        (this.activeIndex - 1 + this.slides.length) % this.slides.length;
    });
  }

  goTo(index: number): void {
    if (index === this.activeIndex) {
      return;
    }

    this.transition(() => {
      this.activeIndex = index;
    });
  }

  onPanelClick(event: Event, panel: PanelKey, route: string): void {
    event.preventDefault();

    if (this.activePanel !== null) {
      return;
    }

    this.activePanel = panel;

    window.setTimeout(() => {
      void this.router.navigateByUrl(route);
    }, 180);
  }

  private transition(update: () => void): void {
    if (this.isTransitioning) {
      return;
    }

    this.isTransitioning = true;

    setTimeout(() => {
      update();
      this.isTransitioning = false;
    }, 250);
  }
}
