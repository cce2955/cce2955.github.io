import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner';
import { SparkleLogo } from '../../shared/sparkle-logo/sparkle-logo';

@Component({
  selector: 'app-candles',
  standalone: true,
  imports: [BannerComponent, SparkleLogo],
  templateUrl: './candles.html',
  styleUrl: './candles.css',
})
export class CandlesComponent {}
