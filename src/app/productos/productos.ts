import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, HostListener, signal } from '@angular/core';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos',
  imports: [CommonModule, NgOptimizedImage, RevealOnScrollDirective,RouterLink],
  templateUrl: './productos.html',
  styleUrl: './productos.scss'
})
export class Productos {

    parallaxY = signal(0);

  @HostListener('window:scroll')
  onScroll() {
    const max = 240; // hasta 240px de desplazamiento virtual
    const y = Math.min(window.scrollY, max);
    this.parallaxY.set((y / max) * 1); // 0..1
    document.documentElement.style.setProperty('--parallaxY', `${this.parallaxY()}`
    );
  }
  // Modelo de ejemplo
llaveros_gossos = {
  images: [
    { src: 'assets/llaverosgosos1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/llaverosgosos2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/llaverosgosos3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

onCardProbeLoad(i: number) {
  this.llaveros_gossos.images[i].ready = true;
}


}
