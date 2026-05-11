import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BannerComponent } from '../../shared/banner/banner';
import { SparkleLogo } from '../../shared/sparkle-logo/sparkle-logo';

import { FeaturedCarouselComponent, FeaturedCarouselSlide } from '../../shared/featured-carousel/featured-carousel';
import { HighlightReel, HighlightItem } from '../../shared/highlight-reel/highlight-reel';
import { HeroBannerComponent, HeroBannerConfig  } from '../../shared/hero-banner/hero-banner';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [BannerComponent, SparkleLogo, HeroBannerComponent, FeaturedCarouselComponent, HighlightReel],
  templateUrl: './body.html',
  styleUrl: './body.css',
})
export class Body {
  heroBanner: HeroBannerConfig = {
    eyebrow: 'Body Collection',
    headline: 'Wear the feeling',
    subtext: 'Daily-use essentials with a softer, elevated fragrance profile. Made to layer, made to last.',
    ctas: [
      { label: 'Shop Body', link: '/body', primary: true },
      { label: 'View All', link: '#highlights', primary: false },
    ],
  };

  slides: FeaturedCarouselSlide[] = [
    {
      label: 'New Arrivals',
      headline: 'Fresh body drops',
      sub: 'New scents and formulas added to the body lineup.',
      color: 'rgba(255, 169, 196, 0.22)',
      ctaLabel: 'Shop Now',
      ctaLink: '/body',
    },
    {
      label: 'Daily Essentials',
      headline: 'Built for your routine',
      sub: 'Soft, elevated fragrance you can wear every day.',
      color: 'rgba(200, 120, 255, 0.16)',
      ctaLabel: 'See Collection',
      ctaLink: '/body',
    },
    {
      label: 'Layer Up',
      headline: 'Pair with sprays and wicks',
      sub: 'Body products designed to complement the full N\'ergy range.',
      color: 'rgba(255, 202, 120, 0.22)',
      ctaLabel: 'Explore Pairings',
      ctaLink: '/sprays',
    },
  ];

  highlights: HighlightItem[] = [
    {
      icon: '',
      title: 'Elevated formulas',
      description: 'Softer on skin, longer lasting fragrance.',
      ctaLabel: 'Shop Body',
      ctaLink: '/body',
    },
    {
      icon: '',
      title: 'Soft profiles',
      description: 'Fragrance that feels personal, not overpowering.',
      ctaLabel: 'Explore Scents',
      ctaLink: '/body',
    },
    {
      icon: '',
      title: 'Made to layer',
      description: 'Designed to work with sprays and wicks across your routine.',
      ctaLabel: 'See Pairings',
      ctaLink: '/sprays',
    },
  ];
}
