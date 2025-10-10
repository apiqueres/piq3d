import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
type HeroImg = { src: string; alt: string; w?: number; h?: number; ready?: boolean };

@Component({
  selector: 'app-inicio',standalone: true,
  imports: [CommonModule, RouterLink, NgOptimizedImage, RevealOnScrollDirective],
  templateUrl: './inicio.html',
  styleUrl: './inicio.scss'
})


export class Inicio {

  parallaxY = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const max = 240; // hasta 240px de desplazamiento virtual
    const y = Math.min(window.scrollY, max);
    this.parallaxY.set((y / max) * 1); // 0..1
    document.documentElement.style.setProperty('--parallaxY', `${this.parallaxY()}`
    );
  }

  heroImages: HeroImg[] = [
    { src: 'llaveros1.png', alt: 'Llavero camiseta personalizado' },
    { src: 'vogan.png',     alt: 'Figura 3D perro Vogan' },
    { src: 'colette.png',   alt: 'Figura 3D perro Colette' },
    { src: 'pubmviman.png',    alt: 'Llaveros CD Arcadi' },
  ].map(i => ({ ...i, ready: false }));

  onProbeLoad(ev: Event, i: number) {
    const img = ev.target as HTMLImageElement;
    const w = img.naturalWidth || 800;
    const h = img.naturalHeight || 800;
    this.heroImages[i] = { ...this.heroImages[i], w, h, ready: true };
  }
}
