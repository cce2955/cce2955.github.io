import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

export type FeaturedCarouselSlide = {
  label: string;
  headline: string;
  sub: string;
  color: string;
  ctaLabel: string;
  ctaLink: string;
};

@Component({
  selector: 'app-featured-carousel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './featured-carousel.html',
  styleUrl: './featured-carousel.css',
})
export class FeaturedCarouselComponent {
  @Input({ required: true }) slides: FeaturedCarouselSlide[] = [];

  activeIndex = 0;
  isTransitioning = false;

  prev(): void {
    if (!this.slides.length) return;
    this.swapTo((this.activeIndex - 1 + this.slides.length) % this.slides.length);
  }

  next(): void {
    if (!this.slides.length) return;
    this.swapTo((this.activeIndex + 1) % this.slides.length);
  }

  goTo(index: number): void {
    if (!this.slides.length || index === this.activeIndex) return;
    this.swapTo(index);
  }

  private swapTo(index: number): void {
    this.isTransitioning = true;

    setTimeout(() => {
      this.activeIndex = index;
      this.isTransitioning = false;
    }, 180);
  }
}
