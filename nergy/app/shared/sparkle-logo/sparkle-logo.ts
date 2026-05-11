import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

type Sparkle = {
  id: number;
  top: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
};

@Component({
  selector: 'app-sparkle-logo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sparkle-logo.html',
  styleUrl: './sparkle-logo.css',
})
export class SparkleLogo {
  @Input() src!: string;
  @Input() alt = '';

  isHovering = false;
  sparkles: Sparkle[] = [];
  private sparkleId = 0;
  private spawnInterval: ReturnType<typeof setInterval> | null = null;
  private cleanupTimeouts: ReturnType<typeof setTimeout>[] = [];

  onHoverStart(): void {
    if (this.isHovering) return;
    this.isHovering = true;
    this.seedSparkles();
    this.spawnInterval = setInterval(() => this.addSparkle(), 220);
  }

  onHoverEnd(): void {
    this.isHovering = false;
    if (this.spawnInterval) {
      clearInterval(this.spawnInterval);
      this.spawnInterval = null;
    }
  }

  private seedSparkles(): void {
    this.sparkles = [];
    for (let i = 0; i < 7; i++) {
      this.addSparkle(i * 0.08);
    }
  }

  private addSparkle(delay = 0): void {
    const sparkle: Sparkle = {
      id: this.sparkleId++,
      top: this.randomBetween(8, 92),
      left: this.randomBetween(8, 92),
      size: this.randomBetween(16, 34),
      duration: this.randomBetween(1.4, 2.4),
      delay,
      rotate: this.randomBetween(-20, 20),
    };

    this.sparkles = [...this.sparkles, sparkle];

    const timeout = setTimeout(() => {
      this.sparkles = this.sparkles.filter((s) => s.id !== sparkle.id);
    }, (sparkle.duration + delay) * 1000 + 250);

    this.cleanupTimeouts.push(timeout);
  }

  private randomBetween(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }
}
