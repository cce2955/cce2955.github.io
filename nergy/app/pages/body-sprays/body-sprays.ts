import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner';

@Component({
  selector: 'app-body-sprays',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './body-sprays.html',
  styleUrl: './body-sprays.css',
})
export class BodySpraysComponent {}
