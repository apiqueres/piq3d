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
  llaveros = {
  images: [
    { src: 'assets/llavero1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/llavero2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/llavero3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/llavero4.png', w: 500, h: 500, alt: 'Vista 4', ready: false },
    { src: 'assets/llavero5.png', w: 500, h: 500, alt: 'Vista 5', ready: false },
    { src: 'assets/pubmviman.png', w: 500, h: 500, alt: 'Vista 6', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

llaveros_perso = {
  images: [
    { src: 'assets/perso3.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/perso4.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/perso2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/perso1.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};
  // Modelo de ejemplo
llaveros_gossos = {
  images: [
    { src: 'assets/llaverosgosos1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/llaverosgosos2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/llaverosgosos3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/llaverosgosos4.png', w: 500, h: 500, alt: 'Vista 4', ready: false },
    { src: 'assets/llaverosgosos5.png', w: 500, h: 500, alt: 'Vista 5', ready: false },
    { src: 'assets/llaverosgosos6.png', w: 500, h: 500, alt: 'Vista 6', ready: false },
    { src: 'assets/llaverosgosos7.png', w: 500, h: 500, alt: 'Vista 7', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

figures_mascota = {
  images: [
    { src: 'assets/mascotas1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/sofi.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/REIN.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/XALI.png', w: 500, h: 500, alt: 'Vista 4', ready: false },
    { src: 'assets/colette.png', w: 500, h: 500, alt: 'Vista 5', ready: false },
    { src: 'assets/vogan.png', w: 500, h: 500, alt: 'Vista 6', ready: false },
    { src: 'assets/cloe.png', w: 500, h: 500, alt: 'Vista 7', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

trofeos = {
  images: [
    { src: 'assets/trofeu7.png', w: 500, h: 500, alt: 'Vista 5', ready: false },
    { src: 'assets/trofeubarsa.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/trofeu5.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/trofeu6.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/trofeo2.png', w: 500, h: 500, alt: 'Vista 4', ready: false },
    { src: 'assets/trofeu4.png', w: 500, h: 500, alt: 'Vista 6', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

medallas = {
  images: [
    { src: 'assets/medalla.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/medalla.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/medalla.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

nombres = {
  images: [
    { src: 'assets/nom2.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/nom1.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/nom3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

bocinas = {
  images: [
    { src: 'assets/bocina1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/bocina2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/bocina1.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

figuritas = {
  images: [
    { src: 'assets/figura1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/figura2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/figura3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};


onCardProbeLoad(images: { ready: boolean }[], i: number) {
  if (images[i]) {
    images[i].ready = true;
  }
}


}
