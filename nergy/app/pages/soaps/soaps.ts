import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner';

@Component({
  selector: 'app-soaps',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './soaps.html',
  styleUrl: './soaps.css',
})
export class SoapsComponent {}
