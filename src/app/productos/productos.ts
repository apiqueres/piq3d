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
    { src: 'assets/llavero1.jpg', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/llavero3.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
    { src: 'assets/llavero4.jpg', w: 500, h: 500, alt: 'Vista 4', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

llaveros_perso = {
  images: [
    { src: 'assets/perso1.jpg', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/perso2.jpg', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/perso3.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};
  // Modelo de ejemplo
llaveros_gossos = {
  images: [
    { src: 'assets/llaverosgosos1.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/llaverosgosos2.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/llaverosgosos3.png', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

figures_mascota = {
  images: [
    { src: 'assets/colette.png', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/vogan.png', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/cloe.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

trofeos = {
  images: [
    { src: 'assets/trofeo2.jpg', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/trofeo3.jpg', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/trofeo1.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
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
    { src: 'assets/nom2.jpg', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/nom1.jpg', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/nom3.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};

marcos = {
  images: [
    { src: 'assets/foto1.jpg', w: 500, h: 500, alt: 'Vista 1', ready: false },
    { src: 'assets/foto2.jpg', w: 500, h: 500, alt: 'Vista 2', ready: false },
    { src: 'assets/foto3.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
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
    { src: 'assets/figura3.jpg', w: 500, h: 500, alt: 'Vista 3', ready: false },
  ],
  // ...otros campos (titulo, precio, etc.)
};
onCardProbeLoad(i: number) {
  this.llaveros.images[i].ready = true;
  this.llaveros_perso.images[i].ready = true;
  this.llaveros_gossos.images[i].ready = true;
  this.figures_mascota.images[i].ready = true;
  this.trofeos.images[i].ready = true;
  this.medallas.images[i].ready = true;
  this.nombres.images[i].ready = true;
  this.marcos.images[i].ready = true;
  this.bocinas.images[i].ready = true;
  this.figuritas.images[i].ready = true;
}


}
