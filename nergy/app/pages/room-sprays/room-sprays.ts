import { Component } from '@angular/core';
import { BannerComponent } from '../../shared/banner/banner';

@Component({
  selector: 'app-room-sprays',
  standalone: true,
  imports: [BannerComponent],
  templateUrl: './room-sprays.html',
  styleUrl: './room-sprays.css',
})
export class RoomSpraysComponent {}
