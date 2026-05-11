import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './banner.html',
  styleUrls: ['./banner.css'],
})
export class BannerComponent {
  brandImage = 'nergytransparent.PNG';
  menuOpen = false;

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;
  }
}
