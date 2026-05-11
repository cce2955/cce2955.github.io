import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BannerComponent } from './shared/banner/banner';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class AppComponent {}
